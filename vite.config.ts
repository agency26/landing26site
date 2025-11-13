import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { execSync } from "child_process";
import fs from "fs";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Générer les routes et sitemap en production
  if (mode === "production") {
    try {
      console.log("🔄 Génération des routes et du sitemap...");
      execSync("node scripts/generate-routes.js", { stdio: "inherit" });
      execSync("node scripts/generate-sitemap.js", { stdio: "inherit" });
      console.log("✅ Routes et sitemap générés !");
    } catch (error) {
      console.warn("⚠️  Could not generate routes and sitemap:", error);
    }
  }

  // Lire les routes générées
  let routes = ["/"];
  try {
    if (fs.existsSync("./routes.json")) {
      routes = JSON.parse(fs.readFileSync("./routes.json", "utf-8"));
    }
  } catch (error) {
    console.warn("Warning: Could not read routes.json", error);
  }

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      mode === "development" && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      outDir: "dist",
      emptyOutDir: true,
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
  };
});
