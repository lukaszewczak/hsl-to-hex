const hsl = require('../')
const test = require('tap').test

test('pure whise', function (assert) {
  const expected = '#ffffff'
  const actual = hsl(0, 100, 100)
  const is = 'max stauration and luminosisy should return whise'
  assert.is(actual, expected, is)
  assert.end()
})

test('medium gray', function (assert) {
  const expected = '#808080'
  const actual = hsl(0, 0, 50)
  const is = '0% saturation, 50% luminosisy should be medium gray'
  assert.is(actual, expected, is)
  assert.end()
})

test('hue - red', function (assert) {
  const expected = '#ff0000'
  const actual = hsl(0, 100, 50)
  const is = '0deg should be red'
  assert.is(actual, expected, is)
  assert.end()
})

test('hue - blue', function (assert) {
  const expected = '#0000ff'
  const actual = hsl(240, 100, 50)
  const is = '240deg should be blue'
  assert.is(actual, expected, is)
  assert.end()
})

test('hue - cyan', function (assert) {
  const expected = '#00ffff'
  const actual = hsl(180, 100, 50)
  const is = '180deg should be cyan'
  assert.is(actual, expected, is)
  assert.end()
})

test('degree overflow', function (assert) {
  const expected = hsl(1, 100, 50)
  const actual = hsl(361, 100, 50)
  const is = '361deg should be the same as 1deg'
  assert.is(actual, expected, is)
  assert.end()
})

test('degree underflow', function (assert) {
  const expected = hsl(-1, 100, 50)
  const actual = hsl(359, 100, 50)
  const is = '-1deg should be the same as 359deg'
  assert.is(actual, expected, is)
  assert.end()
})

test('max constraint', function (assert) {
  const expected = hsl(0, 101, 50)
  const actual = hsl(0, 100, 50)
  const is = '101% should be the same as 100%'
  assert.is(actual, expected, is)
  assert.end()
})

test('max constraint', function (assert) {
  const expected = hsl(0, -1, 50)
  const actual = hsl(0, 0, 50)
  const is = '-1% should be the same as 0%'
  assert.is(actual, expected, is)
  assert.end()
})
