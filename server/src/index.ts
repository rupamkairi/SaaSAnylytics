// import { Elysia } from "elysia";
import { port } from "./config";
// import { routes } from "./routes";
// import { websockets } from "./websockets";
// import cors from "@elysiajs/cors";

import { Hono } from "hono";
import { websocket, ws } from "./websockets";
import { api } from "./routes";

// const app = new Elysia().use(cors()).use(routes).use(websockets);

// app.listen(port, () => {
//   console.log(`Server is running on http+ws://localhost:${port}`);
// });

const app = new Hono();

app.route("/api", api);
app.route("/ws", ws);

export default {
  port,
  fetch: app.fetch,
  websocket,
};
