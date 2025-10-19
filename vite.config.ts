import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import path from "path";

const resolve = (src: string) => path.resolve(__dirname, src);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: [
      { find: "@", replacement: resolve("src") },
      { find: "@app", replacement: resolve("src/app") },
      { find: "@pages", replacement: resolve("src/pages") },
      { find: "@widgets", replacement: resolve("src/widgets") },
      { find: "@features", replacement: resolve("src/features") },
      { find: "@entities", replacement: resolve("src/entities") },
      { find: "@shared", replacement: resolve("src/shared") },
    ],
  },
});
