import { Client } from "$pg/mod.ts";


import { DATABASE_URL } from "@/config/env.ts";

export const db = new Client(DATABASE_URL);

export async function connectDB() {
  try {
    await db.connect();
    console.log("✅ Banco de dados conectado!");
  } catch (error) {
    console.error("❌ Erro ao conectar no banco:", error);
  }
}