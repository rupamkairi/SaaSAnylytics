import { Elysia } from "elysia";
import routes from "./routes";
import websocket from "./websockets";

const api = new Elysia().use(routes).listen(process.env.API_PORT as string);
const ws = new Elysia().use(websocket).listen(process.env.WS_PORT as string);

console.log(
  `🦊 Elysia is running at 
http://${api.server?.hostname}:${api.server?.port} 
ws://${ws.server?.hostname}:${ws.server?.port}`
);

function MessageImpl(ws: any, message: any) {
  console.log(message);
  // ws.send(message);
}
