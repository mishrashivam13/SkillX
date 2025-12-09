import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  build: {
    // 🔹 Increase chunk warning threshold (not a fix, but avoids false panic)
    chunkSizeWarningLimit: 1000,

    rollupOptions: {
      output: {
       
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react")) return "react-vendor";
            if (id.includes("framer")) return "animation-vendor";
            if (id.includes("lucide")) return "icons-vendor";
            return "vendor";
          }
        },
      },
    },
  },
});
