import cassandra from "cassandra-driver";
import { encode } from "querystring";

const config = {
  dbId: "3128210a-71e5-47fa-a30b-44435b764e82",
  clientId: process.env.ASTRA_CLIENT_ID as string,
  secret: process.env.ASTRA_CLIENT_SECRET as string,
  token: process.env.ASTRA_CLIENT_TOKEN as string,
  host: "3128210a-71e5-47fa-a30b-44435b764e82-asia-south1.db.astra.datastax.com",
  port: 29080,
  cql_port: 29042,
  keyspace: "anylytics",
  region: "asia-south1",
  orgId: "e38be9c7-a691-47d5-b32b-93a1e6a7ca53",
  roles: ["1faa93f2-b889-4190-9585-4bc6e3c3595a"],
};

export async function astraTest() {
  try {
    const astra = new cassandra.Client({
      credentials: {
        username: config.clientId,
        password: config.secret,
      },
      keyspace: "anylytics",
      cloud: {
        secureConnectBundle: "secure-connect-anylytics-development.zip",
      },
    });

    await astra.connect();

    const rs = await astra.execute("SELECT * FROM anylytics.nfts2");
    console.log(`Your cluster returned ${rs.rowLength} row(s)`);

    await astra.shutdown();
  } catch (error) {
    console.log("Error", error);
  }
}

async function astraFetch() {
  try {
    // const data = {
    //   token_id: Math.random() * 100000000,
    //   block_number: Math.random() * 1000000,
    //   block_number_hour: Math.random() * 1000000,
    //   contract_address: "0x57366497EAD87377cB7B86BFA56401F23794c32f",
    //   metadata: "{}",
    //   name: "TestName",
    //   owner_of: "",
    //   symbol: "TEST",
    //   token_standard: "ERC721",
    //   token_uri: "http://aircube.eth",
    // };

    const filter = {
      token_id: { $eq: 1275 },
    };
    const params = {
      where: JSON.stringify(filter),
    };

    let qs = encode(params);

    const nfts = "nfts2";

    // Gives Schemas
    // const schemaUrl = `https://${config.dbId}-${config.region}.apps.astra.datastax.com/api/rest/v2/schemas/keyspaces/${config.keyspace}/${table}`;

    // Gives Resources
    const resourceUrl = `https://${config.dbId}-${config.region}.apps.astra.datastax.com/api/rest/v2/keyspaces/${config.keyspace}/${nfts}?${qs}`;

    const response = await fetch(`${resourceUrl}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "x-cassandra-token": config.token,
      },
    });

    // const response = await fetch(`${resourceUrl}`, {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   headers: {
    //     "content-type": "application/json",
    //     "x-cassandra-token": config.token,
    //   },
    // });

    console.log(await response.json());
  } catch (error) {
    console.log(error);
  }
}
