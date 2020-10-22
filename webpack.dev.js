const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: "development",
    devServer: {
        open: true,
        contentBase: "./dist"
    },
    output: {
        filename: "js/[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // Inject styles into DOM
                    "css-loader", // Turns css into common js 
                    "sass-loader" // Turns sass into css
                ]
            }
        ]
    }
});