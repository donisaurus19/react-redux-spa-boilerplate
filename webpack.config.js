"use strict";

var path = require("path");
var production = process.env.NODE_ENV === "production";
var webpack = require("webpack");

module.exports = {
    entry: path.join(__dirname, "/app/client.js"),
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015", "react"]
                }
            }
        ]
    },
    output: {
        filename: "client-bundle.js",
        path: path.join(__dirname, "/public")
    },
    plugins: production ? [
        new webpack.DefinePlugin({
          "process.env": {
             NODE_ENV: JSON.stringify("production")
           }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ] : []
};
