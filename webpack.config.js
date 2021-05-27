const HtmlWebpackPlugin = require('html-webpack-plugin');

const javascriptRules = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
        loader: "babel-loader",
        options: {
            presets: ["@babel/preset-react", "@babel/preset-env"]
        }
    }
}

module.exports = {
    output: {
        filename: "app.js"
    },
    module: {
        rules: [javascriptRules]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Learning Webpack",
            template: "src/index.html"
        })
    ],
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
}