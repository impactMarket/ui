/* eslint-disable sort-keys */
import { terser } from 'rollup-plugin-terser';
import bundleSize from 'rollup-plugin-bundle-size';
import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import svg from 'rollup-plugin-svg';
import typescript from '@rollup/plugin-typescript';

const packageJson = require('./package.json');

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true
            }
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: './tsconfig.json' }),
            terser(),
            bundleSize(),
            postcss({
                extensions: ['.css']
            }),
            svg()
        ],
        external: ['react', 'react-dom', 'styled-components']
    },
    {
        input: 'dist/esm/types/index.d.ts',
        output: [{ file: 'index.d.ts', format: 'esm' }],
        plugins: [dts()]
    }
];
