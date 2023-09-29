import { Elysia } from "elysia";

const routes = new Elysia().get("/api", async () => {
  return "API";
});

export default routes;
