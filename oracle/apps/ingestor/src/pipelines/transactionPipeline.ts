import { Connection, Logs } from "@solana/web3.js";

export function startTransactionPipeline(connection: Connection) {
  connection.onLogs(
    "all",
    (logs: Logs) => {
      console.log("--------------------------------");
      console.log("Signature:", logs.signature);
      console.log("Error:", logs.err);

      for (const log of logs.logs) {
        console.log(log);
      }
    },
    "confirmed"
  );
}