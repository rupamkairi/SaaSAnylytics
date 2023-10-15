import path from "path";
import solidstart from "solid-start/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    solidstart({
      ssr: false,
    }),
  ],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
  },
});
