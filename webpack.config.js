module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.scss$/, loader: "style-loader!css-loader!sass-loader" },
            { test: /\.svg$/, loader: 'svg-url-loader' },
            { test: /\.defs\.svg$/, loader: 'svg-inline-loader' }
        ]
    }
};
