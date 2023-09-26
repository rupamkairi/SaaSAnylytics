import { Elysia } from "elysia";

const api = new Elysia().get("/api", () => "API");

export default api;
