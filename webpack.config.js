"use strict";
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        'main': './App/index.tsx'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './wwwroot/dist'),
        publicPath: 'dist/'
    },

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader'
            }
        ]
    }
};