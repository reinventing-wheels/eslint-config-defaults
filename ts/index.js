'use strict'

const js = require('../js')

const overrides = [
  'brace-style',
  'func-call-spacing',
  'indent',
  'no-extra-parens',
  'no-extra-semi',
  'no-unused-vars',
  'quotes',
  'semi',
  'space-before-function-paren'
]

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
    ...Object.fromEntries(overrides.flatMap(rule => [
      [rule, 'off'],
      [`@typescript-eslint/${rule}`, js.rules[rule]]
    ])),
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unnecessary-condition': ['error', { ignoreRhs: true }],
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-readonly': 'error'
  }
}
