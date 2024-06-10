import { client } from "./clickhouse/client";

const main = async () => {
  const row = await client.query({
    query: `SELECT * FROM default.hits`,
  });

  const jsonRow = await row.json();

  console.log(jsonRow.data);

  // await client.insert({
  //   table: "hits",
  //   values: [
  //     { hit_id: 1, hit_at: Date.now() },
  //     { hit_id: 2, hit_at: Date.now() },
  //   ],
  //   format: "JSONEachRow",
  // });

  // await client.close();
};

main();
