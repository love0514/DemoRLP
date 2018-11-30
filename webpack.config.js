const webpack = require('webpack');
var path = require('path');
module.exports = {
    entry: {
        main: path.join(__dirname, './src/main.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'js/[name].js',
        chunkFilename: "js/[name].[chunkHash:8].js"
    },
    module: {
        rules: [{
            test: /\.js$|.jsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ["@babel/preset-env", '@babel/preset-react'], plugins: [["@babel/plugin-proposal-decorators", { "legacy": true }], "transform-class-properties", "babel-plugin-syntax-dynamic-import"]
            }
        }, {
            test: /\.(scss|sass|css)$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.(png|jpg|jpng|eot|ttf)$/,
            loader: 'url-loader?limit=8192&name=images/[name].[ext]'
        }]

    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: '.',
            manifest: require("./dist/vendor.manifest.json"),
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            }
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        historyApiFallback: {
            rewrites: [
                { from: /.*/g, to: '/index.html' }
            ]
        }, proxy: {
            '/api/': {
                target: 'https://ogl0514.zendesk.com',
                changeOrigin: true,
                secure: false
            }
        }
        ,
        // host: "192.168.1.161",
        // https:true,
        inline: true,
        port: 8000,
        open: true
    }
};