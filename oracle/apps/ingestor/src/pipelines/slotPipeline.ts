import { Connection } from "@solana/web3.js";

export function startSlotPipeline(connection: Connection) {
  connection.onSlotChange((slotInfo) => {
    console.log(
      `Slot ${slotInfo.slot} | Parent ${slotInfo.parent}`
    );
  });
}