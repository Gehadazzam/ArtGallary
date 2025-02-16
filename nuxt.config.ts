import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  alias: {
    "@": resolve(__dirname, "./src"),
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
});
