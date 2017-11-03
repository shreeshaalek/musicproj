var path = require('path');
var path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './clientSideInterface/index.html',
    filename: 'index.html',
    inject: 'body'
  });
var DIST_DIR   = path.join(__dirname, "dist");
module.exports = {
    entry: './clientSideInterface/index.js',
    output: {
        path: DIST_DIR,
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.hbs/, loader: 'handlebars-template-loader', exclude: /node_modules/ }
        ]
    },

plugins: [HtmlWebpackPluginConfig]
};
