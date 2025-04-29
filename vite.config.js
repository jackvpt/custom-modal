import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/Modal/index.js',  
      name: 'Modal', 
      fileName: () => 'index.js',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],  
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
