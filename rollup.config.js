import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

import packageJSON from './package.json';

export default {
  input: 'src/index.ts',
  plugins: [
    peerDepsExternal(),
    resolve(),
    typescript(),
  ],
  output: [
    {
      format: 'cjs',
      file: packageJSON.main,
      sourcemap: true,
      exports: 'auto',
    },
    {
      format: 'esm',
      file: packageJSON.module,
      sourcemap: true,
    },
  ],
};
