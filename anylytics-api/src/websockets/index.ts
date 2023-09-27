import Elysia from "elysia";
import openHandlerImpl from "./open";
import messageHandlerImpl from "./message";
import closeHandlerImpl from "./close";
import errorHandlerImpl from "./error";

const websocket = new Elysia().ws("", {
  open: openHandlerImpl,
  close: closeHandlerImpl,
  message: messageHandlerImpl,
  error: errorHandlerImpl,
});

export default websocket;
