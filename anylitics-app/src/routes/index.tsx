import { Title, createRouteData, useRouteData } from "solid-start";
import ws from "ws";
import { pgTable, serial, text } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/neon-serverless";
import { neonConfig, Pool } from "@neondatabase/serverless";

neonConfig.webSocketConstructor = ws;

const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name"),
});

export function routeData() {
  return createRouteData(async () => {
    const pool = new Pool({
      connectionString: import.meta.env.VITE_NEON_DBURI,
    });
    const db = drizzle(pool);
    const result = await db.select().from(users);
    return result;
  });
}

export default function Home() {
  const users = useRouteData<typeof routeData>();

  return (
    <main>
      <Title>Anylytics</Title>
      <pre>{JSON.stringify(users())}</pre>
    </main>
  );
}
