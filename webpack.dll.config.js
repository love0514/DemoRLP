const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode:'production',
    entry: {
        vendor: [
            'react',
            'react-dom',
            'react-router-dom',
            'mobx-react',
            'mobx',
            'react-intl'
        ],
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].dll.js',
        library: '[name]_library'
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, './dist', '[name].manifest.json'),
            name: '[name]_library'
        })
    ]
};