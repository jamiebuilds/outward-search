// @flow
'use strict';

const outwardSearch = require('./');

test('empty array', () => {
  expect(outwardSearch([], 0, () => true)).toBe(null);
});

test('match starting point', () => {
  expect(outwardSearch([0, 1, 2], 1, item => item === 1)).toBe(1);
});

test('match below', () => {
  expect(outwardSearch([0, 1, 2, 3], 2, item => item === 1)).toBe(1);
});

test('match above', () => {
  expect(outwardSearch([0, 1, 2, 3], 1, item => item === 2)).toBe(2);
});

test('start out of bound', () => {
  expect(() => {
    outwardSearch([0, 1, 2], 3, () => true);
  }).toThrow();
});

test('no matches', () => {
  expect(outwardSearch([0, 1, 2], 1, item => item === -1)).toBe(null);
});

test('start at min', () => {
  expect(outwardSearch([0, 1, 2], 0, item => item === 2)).toBe(2);
});

test('start at max', () => {
  expect(outwardSearch([0, 1, 2], 2, item => item === 0)).toBe(0);
});

test('start at NaN', () => {
  expect(() => {
    outwardSearch([0, 1, 2], NaN, () => true);
  }).toThrow();
});

test('start at Infinity', () => {
  expect(() => {
    outwardSearch([0, 1, 2], Infinity, () => true);
  }).toThrow();
});
