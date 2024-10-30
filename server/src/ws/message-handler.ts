import type { Ievent, Iws } from "@/types";

export default function messageHandler(event: Ievent, ws: Iws) {
  // console.log(event);
  let data = "";

  if (!event.data) return data;

  data = JSON.parse(event.data as string);
  console.log(data);

  return data;
}
