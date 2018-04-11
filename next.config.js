const withStylus = require('@zeit/next-stylus')
module.exports = withStylus({
  webpack(config, options) {
      config.module.rules.push(
        {
          test: /\.css$/,
          use: [{
              loader: "style-loader" // creates style nodes from JS strings
          }, {
              loader: "css-loader" // translates CSS into CommonJS
          }, { 
              loader: 'less-loader', options: { javascriptEnabled: true } 
          }]
        },
        {
          test: /\.less$/,
          use: [{
              loader: "style-loader" // creates style nodes from JS strings
          }, {
              loader: "css-loader" // translates CSS into CommonJS
          },{ 
              loader: 'less-loader', options: { javascriptEnabled: true }
          }]
        }
      )
    return config
  }
})