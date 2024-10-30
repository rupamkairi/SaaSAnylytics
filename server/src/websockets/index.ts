// import Elysia from "elysia";
// import messageHandlerImpl from "./message-handler";

import { createBunWebSocket } from "hono/bun";
import type { ServerWebSocket } from "bun";
import { Hono } from "hono";
import messageHandler from "./message-handler";

// export const websockets = new Elysia().ws("/ws", {
//   open: (ws) => {
//     console.log("socket_id", ws.id);
//   },
//   message: messageHandlerImpl,
// });

export const { upgradeWebSocket, websocket } =
  createBunWebSocket<ServerWebSocket>();

export const ws = new Hono();

ws.get(
  "",
  upgradeWebSocket((c) => {
    return {
      onOpen(evt, ws) {},
      onMessage: messageHandler,
      onClose(evt, ws) {},
    };
  })
);
