const path = require("path")

const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")

module.exports = {
    entry: path.resolve(__dirname, "src", "js", "index.js"),
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: path.join("js", "[name].js"),
    },
    devServer: {
        hot: true /* Hot reload dev server */,
        open: true /* Abre navegador */,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    // MiniCssExtractPlugin.loader, /* Transpila archivos (producción) */
                    "style-loader" /* Inyecta archivos (dev) */,
                    "css-loader",
                ],
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin() /* Para hot reload */,
        new HtmlWebpackPlugin({ title: "Plugins" }),
        // new MiniCssExtractPlugin({ filename: "css/[name].css" }), /* Transpila archivos (producción) */
    ],
}
