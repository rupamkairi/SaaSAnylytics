// import type { ServerWebSocket } from "bun";
// import type { InputSchema, MergeSchema, UnwrapRoute } from "elysia";
// import { ElysiaWS } from "elysia/ws";

import type { ServerWebSocket } from "bun";
import type { WSContext, WSMessageReceive } from "hono/ws";

// export type Iws = ElysiaWS<
//   ServerWebSocket<{}>,
//   MergeSchema<UnwrapRoute<InputSchema<never>, {}>, {}> & any
// >;

export type Iws = WSContext<ServerWebSocket<undefined>>;

// export type Icode = number | unknown;
// export type Imessage = string | unknown;

export type Ievent = MessageEvent<WSMessageReceive>;
