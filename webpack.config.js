//const historyApiFallback = require("connect-history-api-fallback");
const path = require("path");
//const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./FrontEnd/humble-beginnings.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  //target: 'node',
  resolve: {
    extensions: ["", ".js", ".jsx"],
    fallback: {
    "fs": false,
    "tls": false,
    "net": false,
    "path": false,
    "zlib": false,
    "http": false,
    "https": false,
    "stream": false,
    "crypto": false,
    "assert" : false,
    "inspector" : false,
    "worker_threads" : false,
    "constants" : false,
    "os" : false,
    "vm" : false,
    "buffer" : false,
    "child_process" : false

    // "path" : require.resolve('path-browserify')
    // "crypto-browserify": require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify 
    } 
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|html)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  plugins: [],
  devServer: {
    port: 4000,
    publicPath: "/build/",
    proxy: {
      "/": "http://localhost:3000",
      historyApiFallback: true,
    },
    hot: true,
  },
};
