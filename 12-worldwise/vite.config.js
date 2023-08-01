// vite.config.js
import { defineConfig } from "vite";
import eslintPlugin from "@rollup/plugin-eslint";

export default defineConfig({
  // Other Vite configurations...
  plugins: [
    eslintPlugin({
      // The file extensions to include for ESLint linting
      include: "**/*.+(js|jsx|ts|tsx)",
      // Add any additional ESLint configuration here (optional)
    }),
  ],
});
