const historyApiFallback = require('connect-history-api-fallback');
const path = require('path');


module.exports = {
    mode: process.env.NODE_ENV,
    entry: './FrontEnd/humble-beginnings',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
        ],
    },
    plugins: [],
    devServer: {
        proxy: {
            '/' : 'http://localhoest:3000',
            historyApiFallback: true
        },
        hot: true
    }
};