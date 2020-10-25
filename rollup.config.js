import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";

import packageJSON from './package.json';

export default {
  input: 'src/index.ts',
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs({ include: /node_modules/ }),
    typescript({ useTsconfigDeclarationDir: true }),
  ],
  output: [
    {
      format: 'cjs',
      file: packageJSON.main,
    },
    {
      format: 'esm',
      file: packageJSON.module,
    },
  ],
};
