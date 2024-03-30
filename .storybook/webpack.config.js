const path = require('path')

module.exports = ({ config }) => {
  // Alternately, for an alias:
  const source = process.env.SOURCE || 'src'
  const themes = process.env.THEMES || `${source}/themes`
  config.resolve.alias = {
    ...config.resolve.alias,
    '~': path.resolve(__dirname, '..', source),
    '@themes': path.resolve(__dirname, '..', themes),
  }

  return config
}
