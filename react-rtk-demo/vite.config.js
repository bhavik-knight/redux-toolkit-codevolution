import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],

    // to expose that port in the docker
    port: 3000,

    // use Polling to make sure that chages are relected in the realtime in docker
    server: {
        host: true,
        port: 3000,
        strictPort: true,
        watch: {
            usePolling: true,
        },
    },
});
