import "https://deno.land/std@0.214.0/dotenv/load.ts";

export const PORT = Deno.env.get("PORT") || "8000";
export const DATABASE_URL = Deno.env.get("DATABASE_URL") || "";
export const JWT_SECRET = Deno.env.get("JWT_SECRET") || "changeme";