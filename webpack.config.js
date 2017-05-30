const { resolve } = require('path'),
      webpack     = require('webpack')

module.exports = {
  context:   resolve(__dirname, 'src'),
  entry:     [ './index.js' ],
  output:    {
    filename:   'bundle.js',
    path:       resolve(__dirname, 'public'),
    publicPath: '/'
  },
  devtool:   'inline-sourcemap',
  devServer: {
    port: 3000,
    
    // enable HMR on the server
    hot: true,
    
    // Match the output path
    contentBase: resolve(__dirname, 'public'),
    
    // Match the output 'publicPath'
    publicPath: '/'
    
  },
  module:    {
    loaders: [
      {
        test:    /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:   {
          presets: [
            'es2015',
            'stage-0',
            'react',
            //'react-hmre'
          ]
        }
      }
    ]
  },
  plugins:   [
    // Prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin()
  ]
}
