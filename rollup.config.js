import babel from 'rollup-plugin-babel'

export default {
  input: 'src/index.js',

  output: {
    format: 'esm',
    file: 'dist/pan-events.js'
  },

  plugins: [
    babel()
  ]
}
