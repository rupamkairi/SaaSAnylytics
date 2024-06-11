import Elysia from "elysia";
import messageHandlerImpl from "./message-handler";

export const websockets = new Elysia().ws("/ws", {
  open: (ws) => {
    console.log("socket_id", ws.id);
  },
  message: messageHandlerImpl,
});
