import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base:'/',
  build: {
    outDir: "dist", // Direktori output build
  },
  resolve: {
    alias: {
      "@": "/src", // Alias untuk mempermudah import
    },
  },
});
