const Lodash = require('./sync');

let _ = new Lodash();

describe('Lodash compact', () => {
  let array = [false, 42, 0, '', true, null, 'hello'];
    
  beforeEach(() => {
    array = [false, 42, 0, '', true, null, 'hello'];
  })

  afterAll(() => {
    _ = new Lodash();
  })

  test('Should be defined', () => {
    expect(_.compact).toBeDefined();
    expect(_.compact).not.toBeUndefined();
  });

  test('should working array be editable', () => {
    array.push(...['one', 'two']);
    expect(array).toContain('one');
    expect(array).toContain('two');
  });

  test('Should remove falsy values from Array', () => {
    const result = [42, true, 'hello'];
    expect(_.compact(array)).toEqual(result);
  });

  test('Should not contain falsy values', () => {
    expect(_.compact(array)).not.toContain(false);
    expect(_.compact(array)).not.toContain(0);
    expect(_.compact(array)).not.toContain('false');
    expect(_.compact(array)).not.toContain(null);
  });
});

describe('Lodash GroupBy', () => {
  test('Should be defined', () => {
    expect(_.groupBy).toBeDefined();
    expect(_.groupBy).not.toBeUndefined();
  });

  test('Should group array items by Math.floor', () => {
    const array = [2.2, 2.4, 4.2, 3.1];
    const result = {
      2: [2.2, 2.4],
      4: [4.2],
      3: [3.1]
    };
    expect(_.groupBy(array, Math.floor)).toEqual(result);
  });

  test('should group array items by length', () => {
    const array = ['one', 'two', 'three', 'four'];
    const result = {
      3: ['one', 'two'],
      5: ['three'],
      4: ['four']
    };
    expect(_.groupBy(array, 'length')).toEqual(result);
  });

  test('Should not return array', () => {
    expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array);
  });

});