'use strict'

const js = require('../js')

module.exports = {
  ...js,
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
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
        ...require('./overrides'),
        ...require('./rules')
      }
    }
  ]
}
