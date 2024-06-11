import { createClient } from "@clickhouse/client";

export const client = createClient({
  url: process.env.CLICKHOUSE_URL,
});
