import common from './common.config';
import path from 'path';
import webpack, { HotModuleReplacementPlugin } from 'webpack';
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';

const isDev = process.env.NODE_ENV === 'development';

export default {
  ...common,
  entry: [
    isDev && '@gatsbyjs/webpack-hot-middleware/client?path=/__webpack_hmr',
    path.join(__dirname, '../../../client/index.tsx')
  ].filter(Boolean),
  target: 'web',
  output: {
    path: path.join(__dirname, '../public'),
    filename: 'app.client.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-typescript',
              "@babel/preset-react"
            ],
            plugins: [
              isDev && 'react-refresh/babel'
            ].filter(Boolean)
          },
        }
      },
    ]
  },
  plugins: [
    isDev && new HotModuleReplacementPlugin(),
    isDev && new ReactRefreshPlugin({
      overlay: {
        sockIntegration: 'whm',
      },
    }),
  ].filter(Boolean)
} as webpack.Configuration;
