/* eslint array-bracket-newline: ['error', 'never'] */
'use strict'

module.exports = {
  'array-bracket-newline': 'error',
  'array-bracket-spacing': 'error',
  'arrow-body-style': 'error',
  'arrow-parens': ['error', 'as-needed'],
  'arrow-spacing': 'error',
  'block-spacing': 'error',
  'brace-style': ['error', 'stroustrup', {
    allowSingleLine: true
  }],
  'comma-dangle': 'error',
  'comma-spacing': 'error',
  'comma-style': 'error',
  'computed-property-spacing': ['error', 'never', {
    enforceForClassMembers: true
  }],
  'curly': ['error', 'multi-or-nest', 'consistent'],
  'dot-location': ['error', 'property'],
  'dot-notation': 'error',
  'eol-last': 'error',
  'eqeqeq': ['error', 'smart'],
  'func-call-spacing': 'error',
  'function-call-argument-newline': ['error', 'consistent'],
  'function-paren-newline': 'error',
  'generator-star-spacing': ['error', {
    before: false,
    after: true,
    method: {
      before: true,
      after: false
    }
  }],
  'indent': ['error', 2],
  'jsx-quotes': ['error', 'prefer-single'],
  'key-spacing': ['error', {
    mode: 'minimum'
  }],
  'keyword-spacing': 'error',
  'linebreak-style': 'error',
  'lines-around-comment': 'error',
  'lines-between-class-members': ['error', 'always', {
    exceptAfterSingleLine: true
  }],
  'new-parens': 'error',
  'no-control-regex': 'off',
  'no-else-return': ['error', {
    allowElseIf: false
  }],
  'no-extra-bind': 'error',
  'no-extra-label': 'error',
  'no-extra-parens': ['error', 'all', {
    conditionalAssign: false,
    nestedBinaryExpressions: false
  }],
  'no-extra-semi': 'error',
  'no-lonely-if': 'error',
  'no-multi-spaces': ['error', {
    ignoreEOLComments: true,
    exceptions: {
      AssignmentExpression: true,
      BinaryExpression: true,
      CallExpression: true,
      ClassProperty: true,
      TSEnumMember: true,
      TSIntersectionType: true,
      TSTypeAliasDeclaration: true,
      TSUnionType: true,
      VariableDeclarator: true
    }
  }],
  'no-multiple-empty-lines': ['error', {
    max: 1,
    maxBOF: 0,
    maxEOF: 0
  }],
  'no-trailing-spaces': 'error',
  'no-undef-init': 'error',
  'no-unneeded-ternary': 'error',
  'no-unused-vars': ['warn', {
    args: 'all',
    varsIgnorePattern: '^_'
  }],
  'no-useless-computed-key': 'error',
  'no-useless-rename': 'error',
  'no-useless-return': 'error',
  'no-var': 'error',
  'no-whitespace-before-property': 'error',
  'object-curly-newline': 'error',
  'object-curly-spacing': ['error', 'always'],
  'object-property-newline': ['error', {
    allowAllPropertiesOnSameLine: true
  }],
  'object-shorthand': 'error',
  'operator-assignment': 'error',
  'operator-linebreak': ['error', 'after', {
    overrides: { '?': 'before', ':': 'before' }
  }],
  'padded-blocks': ['error', 'never'],
  'prefer-arrow-callback': 'error',
  'prefer-const': 'error',
  'prefer-destructuring': ['error', {
    object: true
  }],
  'prefer-exponentiation-operator': 'error',
  'prefer-numeric-literals': 'error',
  'prefer-object-spread': 'error',
  'prefer-template': 'error',
  'quote-props': ['error', 'consistent-as-needed'],
  'quotes': ['error', 'single', {
    avoidEscape: true,
    allowTemplateLiterals: true
  }],
  'rest-spread-spacing': 'error',
  'semi-spacing': 'error',
  'semi-style': 'error',
  'semi': ['error', 'never'],
  'sort-imports': ['error', {
    ignoreDeclarationSort: true,
    ignoreCase: true
  }],
  'space-before-blocks': 'error',
  'space-before-function-paren': ['error', {
    named: 'never'
  }],
  'space-in-parens': 'error',
  'space-unary-ops': 'error',
  'strict': 'error',
  'switch-colon-spacing': 'error',
  'template-curly-spacing': 'error',
  'template-tag-spacing': 'error',
  'unicode-bom': 'error',
  'wrap-iife': ['error', 'inside'],
  'yield-star-spacing': 'error',
  'yoda': ['error', 'never', {
    exceptRange: true
  }]
}
