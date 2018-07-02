const path = require('path');

module.exports = {
  mode: "development",
  entry: ['./src/app/main.ts'],
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.js',
    publicPath: "/js/",
    path: path.resolve(__dirname, 'src/public/js')
  },
  devServer: {
    contentBase: __dirname + "/src/public/",
    historyApiFallback: true,
    inline: true,
    progress: true,
    headers: { "Access-Control-Allow-Origin": "*" }
  }
};