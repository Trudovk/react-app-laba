import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/old": {
        target: "https://e.mospolytech.ru",
        changeOrigin: true,
      },
    },
  },
});
