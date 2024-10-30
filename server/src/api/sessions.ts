import { Hono } from "hono";

export const sessions = new Hono();

sessions.get("/", async (c) => {
  return c.text("Get Sessions");
});

sessions.post("/", async (c) => {
  return c.text("Post Sessions");
});
