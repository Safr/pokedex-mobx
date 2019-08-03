const {
  useEslintRc,
  addBabelPlugin,
  addDecoratorsLegacy,
  addWebpackAlias,
  override,
} = require('customize-cra');
const aliases = require('./.webpack-aliases');

module.exports = override(
  useEslintRc(),
  addDecoratorsLegacy('@babel/plugin-proposal-decorators'),
  addBabelPlugin('babel-plugin-styled-components'),
  addWebpackAlias(aliases),
);
