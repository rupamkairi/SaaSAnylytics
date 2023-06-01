import ws from "ws";
import { pgTable, serial, text } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/neon-serverless";
import { neonConfig, Pool } from "@neondatabase/serverless";
import { APIEvent, json } from "solid-start";

const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name"),
});

export async function GET({ request, params }: APIEvent) {
  try {
    const pool = new Pool({
      connectionString: import.meta.env.VITE_NEON_DBURI,
    });
    const db = drizzle(pool);
    const result = await db.select().from(users);
    return json(result);
  } catch (error) {
    return new Response("Bad Request", { status: 400 });
  }
}
