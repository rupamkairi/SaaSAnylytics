import cors from "@elysiajs/cors";
import { Elysia } from "elysia";
import { dataResource } from "./service/data";
import { astraTest } from "../database/cassandra";

const routes = new Elysia().use(cors()).group("/api", (app) =>
  app
    .get("/", async () => {
      // astraTest()
      return "API";
    })
    .group("/data", (app) => app.use(dataResource))
);

export default routes;
