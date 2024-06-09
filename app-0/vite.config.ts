import path from "path";
import vercel from "solid-start-vercel";
import solidstart from "solid-start/vite";
import { defineConfig, loadEnv } from "vite";

const config = loadEnv("", process.cwd(), "VITE_");

export default defineConfig({
  server: {
    port: +config.VITE_PORT!,
  },
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
