const path = require('path');

const babelOptions = {
  "presets": [
    ["@babel/preset-react", { 
      "runtime": "automatic"
    }], "@babel/preset-env"
  ]
};

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: babelOptions
        },
        {
          loader: 'ts-loader'
        }
      ]
    }, 
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: babelOptions
        }
      ]
    },
    {
    test: /\.css$/,
    use: ['style-loader', 'css-loader', 'postcss-loader'],
  },
  {
    test: /\.module\.s(a|c)ss$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: true
              ? '[name]__[local]'
              : '[hash:base64:5]',
          },
          sourceMap: true,
        },
      },
      'postcss-loader',
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
        },
      },
    ],
  },
  {
    test: /\.s(a|c)ss$/,
    exclude: /\.module.(s(a|c)ss)$/,
    use: [
      'style-loader',
      'css-loader',
      'postcss-loader',
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
        },
      },
    ],
  }]
  },
  devServer: {
    openPage: 'index.html',
    hot: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.scss']
  },
};