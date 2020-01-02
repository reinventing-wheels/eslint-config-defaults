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

module.exports = Object.fromEntries(overrides.flatMap(rule => [
  [rule, 'off'],
  [`@typescript-eslint/${rule}`, js.rules[rule]]
]))
