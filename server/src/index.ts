import { Elysia } from "elysia";
import { port } from "./config";
import { routes } from "./routes";
import { websockets } from "./websockets";
import cors from "@elysiajs/cors";

const app = new Elysia().use(cors()).use(routes).use(websockets);

app.listen(port, () => {
  console.log(`Server is running on http+ws://localhost:${port}`);
});
