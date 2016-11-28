'use strict';

const config =  {
  presets: [
    require('babel-preset-react-app').default,
  ],
  plugins : [
    require.resolve('babel-plugin-add-module-exports'),
    require.resolve('babel-plugin-transform-export-extensions'),
  ]
};

const env = process.env.BABEL_ENV || process.env.NODE_ENV;

if (env === 'development') {
  config.plugins.push(require.resolve('react-hot-loader/babel'));
}

module.exports = config;