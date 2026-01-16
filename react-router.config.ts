import type { Config } from "@react-router/dev/config";

export default {
    // Config options...
    // Server-side render by default, to enable SPA mode set this to `false`
    // Disabled for Vercel deployment (serverless functions handle API routes)
    ssr: false,
} satisfies Config;
