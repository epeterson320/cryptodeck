import cjsToES6 from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/app.js',
  dest: 'dist/bundle.js',
  format: 'iife',
  exports: 'none',
  plugins: [
    cjsToES6(), // transpile commonjs libraries to es6
    resolve(), // load es6 modules correctly
    babel({ // generate es5 for browser compatibility
      exclude: 'node_modules/**' // only transpile our source code
    }),
  ],
};
