import type { ServerWebSocket } from "bun";
import type { InputSchema, MergeSchema, UnwrapRoute } from "elysia";
import { ElysiaWS } from "elysia/ws";

export type Iws = ElysiaWS<
  ServerWebSocket<{}>,
  MergeSchema<UnwrapRoute<InputSchema<never>, {}>, {}> & any
>;

export type Icode = number | unknown;
export type Imessage = string | unknown;
