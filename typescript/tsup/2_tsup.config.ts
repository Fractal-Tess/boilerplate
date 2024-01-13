import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['main.ts'],
  splitting: false,
  clean: true,
  target: 'node20',
  format: 'esm',
  outDir: 'build'
});
