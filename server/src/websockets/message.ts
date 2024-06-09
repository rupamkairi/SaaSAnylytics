import { writeLine } from "../database/fileDB/rw";
import { Imessage, Iws } from "./types";

export default function messageHandlerImpl(ws: Iws, message: Imessage): void {
  writeLine(JSON.stringify(message));
}
