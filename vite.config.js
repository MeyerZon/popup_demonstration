import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  // Specify the base URL for the project. Use your repo name if deploying to GitHub Pages.
  base: "/popup_demonstration/", // Replace <REPO_NAME> with your GitHub repository name.
  build: {
    // Output directory for build files
    outDir: "dist",
    // Generate relative paths for assets
    assetsDir: "./",
    rollupOptions: {
      // Configure input and output settings
      input: path.resolve(__dirname, "index.html"),
    },
  },
  plugins: [
    // Add any Vite plugins you might need for TypeScript or other purposes here
  ],
  resolve: {
    alias: {
      // Setup aliases if needed
      "@": path.resolve(__dirname, "/src"),
    },
  },
  // Enable TypeScript support
  server: {
    // Configure development server options (optional)
    open: true, // Open the browser automatically
    port: 3000, // Default development port
  },
});
