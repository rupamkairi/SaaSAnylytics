import { Hono } from "hono";
import { cors } from "hono/cors";
import { api } from "./api";
import { port } from "./config";
import { websocket, ws } from "./ws";

const app = new Hono();

app.use("/*", cors());

app.route("/api", api);
app.route("/ws", ws);

export default {
  port,
  fetch: app.fetch,
  websocket,
};
