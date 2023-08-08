const path = require('path');

console.log("Hello World from webpack.config.js ");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundl.js",
        path: path.resolve(__dirname, 'dist')
    },
    devtool: "source-map",
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        },
         {
             test: /\.css$/,
             loader: 'style-loader!css-loader'
         }
]
    },

};
