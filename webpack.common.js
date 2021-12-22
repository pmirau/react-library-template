const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      type: 'umd',
    },
    globalObject: 'this',
    clean: true,
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        loader: 'babel-loader',
        resolve: {
          extensions: ['.js', '.jsx'],
        },
      },
      {
        test: /\.tsx?$/i,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader'],
        resolve: {
          extensions: ['.ts', '.tsx'],
        },
      },
      {
        test: /\.s?css$/i,
        // See https://github.com/vercel/next.js/discussions/14060#discussioncomment-27889
        // for the reason to not use style-loader.
        // Consider using https://github.com/kriasoft/isomorphic-style-loader
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      }

    ],
  },
  externals: {
    'react': 'react',
  },
};
