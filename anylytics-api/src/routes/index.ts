import { Elysia } from "elysia";

const routes = new Elysia().get("/api", () => "API");

export default routes;
