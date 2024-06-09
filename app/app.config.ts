import { defineConfig } from "@solidjs/start/config";

const config = process.env;
console.log(config);
export default defineConfig({
  server: {
    port: +config.APP_PORT!,
  },
});
