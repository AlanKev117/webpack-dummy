const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
    entry: path.resolve(__dirname, "src", "js", "index.js"),
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: path.join("js", "[name].js"),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ title: "Plugins" }),
        new MiniCssExtractPlugin({ filename: "css/[name].css" }),
    ],
}
