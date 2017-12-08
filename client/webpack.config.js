const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: './app.js'
    },
    devServer: {
        port: 3005,
        contentBase: './public',  
    },
    resolve: {
        extensions: ['.js','.jsx'],
        modules: [
            path.resolve('./src'),
            path.resolve('./node_modules')
        ]
    },
    plugins: [
        new ExtractTextPlugin('app.css')
    ],
    module: {
        rules: [{
            test: /\.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015','react'],
                plugins: ['transform-object-rest-spread']
            }
        },{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: "css-loader"
            })
        },{
            test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
            loader: 'file-loader?name=assets/fonts/[name].[ext]'
        },{
            test: /\.(png|jpg|gif)$/,
            loader: 'file-loader?name=assets/img/[name].[ext]'
        },{
            test: /\.json$/,
            loader: 'file-loader?name=assets/json/[name].[ext]'
        },{
            test: /\.pdf$/,
            loader: 'file-loader?name=assets/pdf/[name].[ext]'
        }]
    }
}