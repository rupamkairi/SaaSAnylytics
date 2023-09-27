import { ServerWebSocket } from "bun";
import { InputSchema, MergeSchema, UnwrapRoute } from "elysia";
import { ElysiaWS } from "elysia/dist/ws";

export type Iws = ElysiaWS<
  ServerWebSocket<{}>,
  MergeSchema<UnwrapRoute<InputSchema<never>, {}>, {}>
>;
export type Icode = number | unknown;
export type Imessage = string | unknown;
