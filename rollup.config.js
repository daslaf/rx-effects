import typescript from '@rollup/plugin-typescript';
import packageJSON from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      format: 'cjs', 
      sourcemap: true, 
      file: packageJSON.main, 
      exports: 'auto'
    },
    {
      format: 'esm',
      sourcemap: true,
      file: packageJSON.module
    }
  ],
  plugins: [
    typescript()
  ],
};
