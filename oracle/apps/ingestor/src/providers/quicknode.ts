import { Connection } from "@solana/web3.js";
import { env } from "../config/env";

export class QuickNodeProvider {
  private connection: Connection;

  constructor() {
    this.connection = new Connection(env.rpcHttp, {
      wsEndpoint: env.rpcWs,
      commitment: "confirmed",
    });
  }

  getConnection() {
    return this.connection;
  }
}