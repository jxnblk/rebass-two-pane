
module.exports = {
  entry: './demo/entry.js',
  output: {
    path: __dirname + '/demo', 
    filename: 'bundle.js',
    publicPath: '/demo/',
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: "jsx-loader" }
    ]
  }
};
