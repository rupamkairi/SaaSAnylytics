// import { Elysia } from "elysia";

import { Hono } from "hono";
import { sessions } from "./sessions";

export const api = new Hono();

api.all("/", async (c) => {
  return c.text("API");
});

api.route("/sessions", sessions);

// export const routes = new Elysia().group("/api", (app) =>
//   app
//     .group("/sessions", (app) =>
//       app
//         .get("/", async (req) => {
//           return "Get Sessions";
//         })
//         .post("/", async (req) => {
//           return "Post Sessions";
//         }),
//     )
//     .get("/", async () => {
//       return "API";
//     }),
// );
