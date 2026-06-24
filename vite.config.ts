// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Base URL handling:
//  - In Lovable sandbox / Cloudflare deploy: use "/"
//  - In GitHub Actions: workflow sets VITE_BASE_PATH to "/<repo-name>/"
const basePath = process.env.VITE_BASE_PATH || "/";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // In Lovable sandbox this is overridden to "cloudflare-module" automatically.
  // Outside sandbox (e.g. GitHub Actions), we produce a fully static GitHub Pages build.
  nitro: {
    preset: "github_pages",
  },
  vite: {
    base: basePath,
  },
});
