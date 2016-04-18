module.exports = {
  root: true,
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  "globals": {
      "alert": true
  },
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    "comma-spacing": "off",
    "key-spacing": "off",
    "no-unused-vars": "off",
    "space-before-blocks": "off",
    "no-trailing-spaces": "off",
    "quotes": "off",
    "keyword-spacing": "off",
    "space-before-function-paren": "off",
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
