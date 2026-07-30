import { QuickNodeProvider } from "./providers/quicknode";
import {startSlotPipeline} from "./pipelines/slotPipeline";
import { startTransactionPipeline } from "./pipelines/transactionPipeline";

async function main() {
  console.log("Oracle Ingestor Starting...");

  const provider = new QuickNodeProvider();
  const connection = provider.getConnection();

  
  console.log("Connected to Solana");
  
  startSlotPipeline(connection);
  startTransactionPipeline(connection);

  console.log("Listening for new slots...");
}

main().catch(console.error);