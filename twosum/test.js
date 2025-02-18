const twosum = require('./index');

test('Twosum function is defined', () => {
  expect(typeof twosum).toEqual('function');
});

test('calculates correct twosum value for [2, 7, 11, 15], 9', () => {
  expect(twosum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test('calculates correct twosum value for [4, 2, 9, 11, 15], 17', () => {
  expect(twosum([4, 2, 9, 11, 15], 17)).toEqual([1, 4]);
});