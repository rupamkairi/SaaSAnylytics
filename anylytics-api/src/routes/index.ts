import cors from "@elysiajs/cors";
import { Elysia } from "elysia";
import { dataResource } from "./service/data";

const routes = new Elysia().use(cors()).group("/api", (app) =>
  app
    .get("/", async () => {
      return "API";
    })
    .group("/data", (app) => app.use(dataResource))
);

export default routes;
