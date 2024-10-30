import { Hono } from "hono";
import { sessions } from "./sessions";

export const api = new Hono();

api.all("/", async (c) => {
  return c.text("API");
});

api.route("/sessions", sessions);
