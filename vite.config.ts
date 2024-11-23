import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import alias from '@rollup/plugin-alias';
import { resolve } from 'path';
import commonjs from 'vite-plugin-commonjs';

export default defineConfig({
  plugins: [
    react(),
    alias({
      entries: [
        {
          find: 'react',
          replacement: resolve(__dirname, 'node_modules/react'),
        },
      ],
    }),
    commonjs(),
  ],
  resolve: {
    alias: {
      'react/jsx-runtime': resolve(__dirname, 'node_modules/react/jsx-runtime'),
      react: resolve(__dirname, 'node_modules/react'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    commonjsOptions: {
      include: [/pdfjs-dist/, /node_modules/],
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'pdf-lib': ['pdf-lib'],
          'pdfjs-dist': ['pdfjs-dist'],
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
});