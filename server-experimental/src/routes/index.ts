import { Elysia } from "elysia";

export const routes = new Elysia().group("/api", (app) =>
  app
    .group("/sessions", (app) =>
      app
        .get("/", async (req) => {
          return "Get Sessions";
        })
        .post("/", async (req) => {
          return "Post Sessions";
        }),
    )
    .get("/", async () => {
      return "API";
    }),
);
