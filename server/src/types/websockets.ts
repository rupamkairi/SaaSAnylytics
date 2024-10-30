import type { ServerWebSocket } from "bun";
import type { WSContext, WSMessageReceive } from "hono/ws";

export type Iws = WSContext<ServerWebSocket<undefined>>;
export type Ievent = MessageEvent<WSMessageReceive>;
