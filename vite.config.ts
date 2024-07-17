import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4444,
    // host: "127.0.0.1",
    host: "0.0.0.0",
  },
});
