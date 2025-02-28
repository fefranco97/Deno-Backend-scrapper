import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";
import config from "./fresh.config.ts";
import { connectDB } from "@/db.ts";

await connectDB();


console.log("Starting server...");

await start(manifest, config);
