"use strict";
const path = require('path');
const webpack = require('webpack');
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const OptimizeCSSAssets = require("optimize-css-assets-webpack-plugin");

module.exports = {
    entry: {
        'main': ['./App/index.tsx','./Assets/main.css']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './wwwroot/dist'),
        publicPath: 'dist/'
    },

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css']
    },
    
    plugins: [
        new OptimizeCSSAssets(),
        new ExtractTextWebpackPlugin("[name].css")
    ],
    
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextWebpackPlugin.extract({
                    use: ['css-loader'],
                    fallback: 'style-loader'
                })
            }
        ]
    }
};