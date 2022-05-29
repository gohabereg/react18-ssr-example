const isDev = process.env.NODE_ENV === 'development';

export default {
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
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
            ]
          },
        }
      },
    ]
  },
}
