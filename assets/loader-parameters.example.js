module.exports = {
  module: {
    loaders: [{
      test: /\.jsx$/,
      loader: "jsx-loader?stripTypes"
    }]
  }
};