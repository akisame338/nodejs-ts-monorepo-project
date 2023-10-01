import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';

const { PORT_CLIENT = 3000, PORT_SERVER = 3030 } = process.env;

export default defineConfig({
  plugins: [reactRefresh()],
  server: {
    port: PORT_CLIENT,
    proxy: {
      '/api': {
        target: `http://localhost:${PORT_SERVER}`,
        changeOrigin: true,
      },
    },
  },
  root: path.resolve(__dirname, 'src', 'client'),
});
