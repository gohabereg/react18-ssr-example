import common from './common.config';
import path from 'path';
import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';

export default {
  ...common,
  entry: path.join(__dirname, '../../client/ssr.tsx'),
  target: 'node',
  output: {
    path: path.join(__dirname, '../../bundle'),
    filename: 'ssr.client.js',
    publicPath: '/',
    libraryTarget: 'commonjs2'
  },
  externals: [nodeExternals()]
} as webpack.Configuration;
