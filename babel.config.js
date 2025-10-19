// babel.config.js
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'nativewind/babel', // Comma needed here
      ['@babel/plugin-transform-private-methods', { loose: false }], // Comma needed here
      ['@babel/plugin-proposal-class-properties', { loose: false }]
    ],
  };
};