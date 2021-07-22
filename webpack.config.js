var webpack = require('webpack');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

var config = {};

function generateConfig(name) {
  var compress = name.indexOf('min') > -1;
  var config = {
    entry: './qitech-wrapper.js',
    output: {
      path: __dirname + '/dist/',
      filename: name + '.js',
      sourceMapFilename: name + '.map'
    },
    devtool: 'source-map',
    plugins: [
      new NodePolyfillPlugin()
    ],
    resolve: {
        fallback: {
            "fs": false
        },
    },
    mode: compress ? 'production' : 'development',
    performance: {
      hints: false,
    },
  };
  return config;
}
// 'qitech', 'qitech.min'
key = 'qitech.min';
module.exports = generateConfig(key);