import { createBunWebSocket } from "hono/bun";
import type { ServerWebSocket } from "bun";
import { Hono } from "hono";
import messageHandler from "./message-handler";
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
