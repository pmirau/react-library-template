const presets = [
  ['@babel/preset-env', { targets: { node: 'current' } }],
  '@babel/preset-react',
];
const plugins = [];

if (process.env.NODE_ENV === 'test') {
  presets.push('@babel/preset-typescript');
}

if (process.env.NODE_ENV === 'production') {
  presets.push('@babel/preset-typescript');
}

module.exports = {
  presets,
  plugins,
};
