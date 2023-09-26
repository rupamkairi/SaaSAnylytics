import { Elysia } from "elysia";
import api from "./routes";

const app = new Elysia().use(api).listen(process.env.API_PORT as string);

const ws = new Elysia()
  .ws("/", {
    message(ws, message) {
      ws.send(message);
    },
  })
  .listen(process.env.WS_PORT as string);

console.log(
  `🦊 Elysia is running at 
http://${app.server?.hostname}:${app.server?.port} 
ws://${ws.server?.hostname}:${ws.server?.port}`
);
