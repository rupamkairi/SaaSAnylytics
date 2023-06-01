import solid from "solid-start/vite";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: true,
  },
  plugins: [solid()],
});
