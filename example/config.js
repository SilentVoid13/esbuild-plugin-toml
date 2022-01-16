const esbuild = require('esbuild')
const toml = require('../index')

esbuild.build({
  bundle: true,
  entryPoints: ['example/main.js'],
  outfile: 'example/out.js',
  plugins: [
    toml()
  ]
}).catch(() => process.exit(1))
