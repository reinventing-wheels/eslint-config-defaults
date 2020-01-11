/* eslint array-bracket-newline: ['error', 'never'] */
'use strict'

module.exports = {
  '@typescript-eslint/array-type': 'error',
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/member-delimiter-style': ['error', {
    multiline: {
      delimiter: 'none'
    },
    singleline: {
      delimiter: 'comma'
    }
  }],
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/no-non-null-assertion': 'off',
  '@typescript-eslint/no-unnecessary-condition': ['error', {
    ignoreRhs: true
  }],
  '@typescript-eslint/no-unnecessary-qualifier': 'error',
  '@typescript-eslint/no-unnecessary-type-arguments': 'error',
  '@typescript-eslint/no-use-before-define': 'off',
  '@typescript-eslint/prefer-nullish-coalescing': 'error',
  '@typescript-eslint/prefer-optional-chain': 'error',
  '@typescript-eslint/prefer-readonly': 'error'
}
