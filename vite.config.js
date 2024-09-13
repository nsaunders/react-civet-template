import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import civetPlugin from "@danielx/civet/vite";

export default defineConfig({
  resolve: {
    extensions: [".js", ".civet"],
  },
  plugins: [
    {
      ...civetPlugin(),
      enforce: "pre",
    },
    react(),
  ],
});
