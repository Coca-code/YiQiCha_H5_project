webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: './main.js',


    output: {
        filename: 'bundle.js'
    },


    module: {
        loaders: [
            { test: /\.(png|jpg|ico)$/, loader: 'url-loader?limit=8192' },
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") }
        ]
    },

    // externals: [{
    //     'webpack-zepto:': '$'
    // }],

    resolve: {
        extensions: ['', '.coffee', '.js'],

        modulesDirectories: ['node_modules']
    },

    plugins: [
        new webpack.BannerPlugin('This file is created by bruce.'),
        new ExtractTextPlugin("style.css")
        // new webpack.ProvidePlugin({
        //     $: 'jquery',
        //     jQuery: 'jquery',
        //     "window.jQuery":"jquery"
        // })
    ]
};
