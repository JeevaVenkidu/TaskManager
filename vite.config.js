import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/TaskManager/", // Base path for GitHub Pages (repo name)
  server: {
    port: 3000,
    host: "localhost",
    strictPort: true,
    open: true, // Automatically open the app in the browser
  },
});
