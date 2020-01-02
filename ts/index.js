'use strict'

const js = require('../js')

module.exports = {
  ...js,
  extends: [
    ...js.extends,
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    ...js.rules,
    ...require('./overrides'),
    ...require('./rules')
  }
}
