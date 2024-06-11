import type { Imessage, Iws } from "@/types";

export default function messageHandlerImpl(ws: Iws, message: Imessage): void {
  console.log(message?.type);
}
