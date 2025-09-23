const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports={
    mode: "development",
    entry: {
        build:path.resolve(__dirname, "src/index.js"),
    },
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "[name][contenthash].js",
        clean:true
    },
    module:{
        rules:[
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: "Document",
            filename: "index.html",
            template: "src/template.html"
        })
    ]
}