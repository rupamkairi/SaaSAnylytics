import path from "path";
import vercel from "solid-start-vercel";
import solidstart from "solid-start/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    solidstart({
      ssr: true,
      adapter: vercel({
        prerender: true,
      }),
    }),
  ],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
  },
});
