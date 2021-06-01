const sum = require('./sum');

test('Sum test', () => {
  expect(sum(2, 2)).toBe(4);
});