'use strict'

const webpack = require('webpack')
const path = require('path')
const fs = require('fs')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const entry = {
  'src': './src/js/index.jsx'
}

const output = {
  path: path.join(__dirname, '/build'),
  publicPath: '/'
}

const resolve = {
  extensions: ['', '.js', '.jsx', '.scss']
}


/**
 *    Loaders
 */

const loaders = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    query: {
      presets: ['es2015', 'stage-0', 'react']
    }
  },
  {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract(['css','sass'])
  }
]



/**
 *    Plugins
 */

// combine to a single array
const plugins = [
  // root html file
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: './src/index.html',
  }),
  // static assets e.g. images
  new CopyWebpackPlugin([{ from: 'assets', to: 'assets' }]),
  // output css
  new ExtractTextPlugin('[name].css')
]



/**
 *    Build config object
 */
module.exports = {
  entry,
  output,
  resolve,
  module: { loaders },
  plugins,
  devtool: 'cheap-module-source-map',
  devServer: {
    stats: 'errors-only'
  },
  recordsPath: path.resolve('/tmp/webpack.json')
}
