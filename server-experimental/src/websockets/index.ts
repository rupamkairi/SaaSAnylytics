import Elysia from "elysia";
import messageHandlerImpl from "./message-handler";

export const websockets = new Elysia().ws("/ws", {
  open: (ws) => {
    console.log("Websocket opened", ws.id);
  },
  message: messageHandlerImpl,
});
