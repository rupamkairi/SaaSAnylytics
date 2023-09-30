import Elysia, { Context } from "elysia";
import { read } from "../../database/fileDB/rw";

export const dataResource = new Elysia().get("/", getData);

export async function getData({ request, set }: Context) {
  try {
    set.status = 200;
    return await read();
  } catch (error) {}
}
