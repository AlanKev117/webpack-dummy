const path = require("path")

const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")

module.exports = {
    entry: path.resolve(__dirname, "src", "js", "index.js"),
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
                test: /\.jsx?$/,
                use: "babel-loader",
                exclude: path.resolve(__dirname, "node_modules"),
            },
            {
                test: /\.css$/,
                use: [
                    // MiniCssExtractPlugin.loader, /* Transpila archivos (producción) */
                    "style-loader" /* Inyecta archivos (dev) */,
                    { loader: "css-loader", options: { importLoaders: 1 } },
                    "postcss-loader"
                ],
            },
            {
                test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 900000,
                    },
                },
            },
            {
                test: /\.less$/,
                use: [
                    // MiniCssExtractPlugin.loader, /* Transpila archivos (producción) */
                    "style-loader" /* Inyecta archivos (dev) */,
                    "css-loader",
                    "less-loader",
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    // MiniCssExtractPlugin.loader, /* Transpila archivos (producción) */
                    "style-loader" /* Inyecta archivos (dev) */,
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.styl$/,
                use: [
                    // MiniCssExtractPlugin.loader, /* Transpila archivos (producción) */
                    "style-loader" /* Inyecta archivos (dev) */,
                    "css-loader",
                    "stylus-loader",
                ],
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "index.html"),
            filename: path.join(".", "index.html"),
        }),
        // new MiniCssExtractPlugin({ filename: path.resolve(__dirname, "css", "[name].css")})
    ],
}
