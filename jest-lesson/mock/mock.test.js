const { map } = require('./mock');

describe('Map function', () => {
  let array;
  let fn;

  beforeEach(() => {
    fn = jest.fn(x => x ** 2);
    array = [1,2,3,5];
    map(array, fn);
  });

  test('Should call callback', () => {
    expect(fn).toBeCalled();
  });

  test('Should call callback 4 times', () => {
    expect(fn).toBeCalledTimes(4);
    expect(fn.mock.calls.length).toBe(4);
  });

  test('Should pow each element', () => {
    expect(fn.mock.results[0].value).toBe(1);
    expect(fn.mock.results[1].value).toBe(4);
    expect(fn.mock.results[2].value).toBe(9);
    expect(fn.mock.results[3].value).toBe(25);
  });

  test('Should  fn work', () => {
    fn
      .mockReturnValueOnce(100)
      .mockReturnValueOnce(200)
      .mockReturnValue(42)

    expect(fn()).toBe(100);
    expect(fn()).toBe(200);
    expect(fn()).toBe(42);
    expect(fn()).toBe(42);
  });
});