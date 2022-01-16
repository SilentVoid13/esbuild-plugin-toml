# esbuild-plugin-toml

An esbuild plugin to handle toml files.


### Install

```zsh
npm install esbuild-plugin-toml -D
```
```zsh
yarn add esbuild-plugin-toml -D
```


### Usage

`esbuild.config.json`

```js
const esbuild = require('esbuild');
const toml = require('esbuild-plugin-toml');

esbuild.build({
  bundle: true,
  entryPoints: ['main.js'],
  outfile: 'out.js',
  plugins: [
    toml()
  ]
}).catch(() => process.exit(1))
```

In your JS files:

```js
const tomlObject = require('example.toml');
```
