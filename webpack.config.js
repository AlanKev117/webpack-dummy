const path = require("path")
module.exports = {
    /**
     * Single entry point
     */
    // entry: path.resolve(__dirname, "src", "js", "index.js"),

    /**
     * Multi entry points
     */
    entry: {
        index: path.resolve(__dirname, "src", "js", "index.js"),
        prices: path.resolve(__dirname, "src", "js", "prices.js"),
        contact: path.resolve(__dirname, "src", "js", "contact.js"),
    },
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist", "js"),
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
}
