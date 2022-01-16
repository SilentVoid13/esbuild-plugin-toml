const toml = require('toml');
const path = require('path');
const fs = require('fs');

module.exports = options => {
  return {
    name: 'toml',
    setup (build) {
      build.onResolve({ filter: /\.toml$/ }, (args) => {
        return {
          path: path.resolve(args.resolveDir, args.path),
          namespace: 'toml'
        }
      });
      build.onLoad({ filter: /.*/, namespace: 'toml' }, (args) => {
        const result = fs.readFileSync(args.path, 'utf-8')
        const compiled = toml.parse(result)
        const stringed = JSON.stringify(compiled)
        return {
          contents: stringed,
          loader: 'json'
        }
      });
    }
  }
}
