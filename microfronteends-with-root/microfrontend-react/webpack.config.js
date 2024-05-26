const path = require("path");

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        libraryTarget: 'system'
    },
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src/components'),
        },
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
    ],
    externals: ['single-spa', 'react', 'react-dom', 'appMicroFrontendJavascript'],
    devServer: {
        historyApiFallback: true,
        port: 4002,
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    }
}