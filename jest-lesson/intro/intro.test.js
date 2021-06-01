const { sum, nativeNull } = require('./intro');

describe('Sum function', () => {
  test('Sum should be return sum of two values', () => {
    expect(sum(1, 3)).toBe(4);
    expect(sum(1, 3)).toEqual(4);
  });
  
  test('Sum should return value, wich will correctly comparing with other values', () => {
    expect(sum(2, 3)).toBeGreaterThan(4);
    expect(sum(2, 3)).toBeGreaterThanOrEqual(5);
    expect(sum(2, 3)).toBeLessThan(6);
    expect(sum(2, 3)).toBeLessThanOrEqual(5);
  });
  
  test('Sum should sum two float values correctly', () => {
    expect(Math.floor(sum(0.1, 0.2) * 100) / 100).toBe(0.3);
  });
});


describe('Native null function', () => {
  test('Should return falsy value', () => {
    expect(nativeNull()).toBe(null);
    expect(nativeNull()).toBeNull();
    expect(nativeNull()).toBeFalsy();
    expect(nativeNull()).toBeDefined();
    expect(nativeNull()).not.toBeTruthy();
    expect(nativeNull()).not.toBeUndefined();
  });
});