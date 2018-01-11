var path = require('path');
var webpack = require('webpack');
// var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// var VendorChunkPlugin = require('webpack-vendor-chunk-plugin');
// var path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './clientSideInterface/index.html',
    filename: 'index.html',
    inject: 'body'
  });
var DIST_DIR   = path.join(__dirname, "dist");
module.exports = {
    entry: {app: './clientSideInterface/index.js', vendor: ['react', 'redux']},
    output: {
        path: DIST_DIR,
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            {test: /\.scss$/,
                use: [{
                loader: "style-loader"
                }, {
                loader: "css-loader" 
                }, {
                loader: "sass-loader"
                }]
            }
        ]
    },

    plugins: [
        // new BundleAnalyzerPlugin({
        //     analyzerMode: 'static'
        // }),
        HtmlWebpackPluginConfig
        // new webpack.optimize.CommonsChunkPlugin({
        //     name:'vendor', 
        //     filename:'vendor.js'
        // }),
        // new VendorChunkPlugin('vendor'),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'node-static',
        //     filename: 'node-static.js',
        //     minChunks(module, count) {
        //         var context = module.context;
        //         return context && context.indexOf('node_modules') >= 0;
        //     },
        // }),
        ]
};
