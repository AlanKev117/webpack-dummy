const path = require("path")

const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")

module.exports = {
    entry: {
        index: path.resolve(__dirname, "src", "js", "index.js"),
        contact: path.resolve(__dirname, "src", "js", "contact.js"),
    },
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
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { publicPath: "" },
                    },
                    { loader: "css-loader", options: { importLoaders: 1 } },
                    "postcss-loader",
                ],
            },
            {
                test: /\.(jpg|png|gif|woff|eot|ttf|svg|mp4|webm)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 50000,
                    },
                },
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { publicPath: "" },
                    },
                    "css-loader",
                    "less-loader",
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { publicPath: "" },
                    },
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.styl$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { publicPath: "" },
                    },
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
        new webpack.DllReferencePlugin({
            manifest: require("./modules-manifest.json"),
        }),
        new MiniCssExtractPlugin({
            filename: path.join("css", "[name].css"),
            chunkFilename: path.join("css", "[id].css"),
        }),
    ],
    // optimization: {
    //     splitChunks: {
    //         chunks: "all",
    //         minSize: 0,
    //         name: "commons",
    //     },
    // },
}
