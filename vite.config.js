import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      assets: "/src/assets",
      components: "/src/components",
      hooks: "/src/hooks",
      pages: "/src/pages",
      providers: "/src/providers",
      routes: "/src/routes",
      utils: "/src/utils",
    },
  },
  plugins: [react()],
});
