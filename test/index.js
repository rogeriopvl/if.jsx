const test = require('tape')
const If = require('../')

test('If exists as a function', function (t) {
  t.equal(typeof If, 'function')
  t.end()
})

test('returns function', function (t) {
  const res = If(true)
  t.equal(typeof res, 'function')
  t.end()
})

test('when condition is false', function (t) {
  t.test('curried function returns undefined', function (assert) {
    const res = If(false)
    assert.equal(res(), undefined)
    assert.end()
  })
})

test('when condition is true', function (t) {
  t.test('curried function returns children', function (assert) {
    const res = If(true)([1, 2, 3])
    assert.deepEquals(res, [1, 2, 3])
    assert.end()
  })
})
