import { noop, noopLax } from '..';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function callback<T extends (...args: any) => any>(fn: T): ReturnType<T> {
  return fn();
}

describe('Test of noop function', () => {
  it('without arguments', () => {
    expect(noop()).toEqual(undefined);
  });

  it('in callback', () => {
    expect(callback(noop)).toEqual(undefined);
  })
});

describe('Test of noopLax function', () => {
  it('with a numeric argument', () => {
    expect(noopLax(1)).toEqual(undefined);
  });

  it('with a string argument', () => {
    expect(noopLax('a')).toEqual(undefined);
  });

  it('with a empty object argument', () => {
    expect(noopLax({})).toEqual(undefined);
  });

  it('without arguments', () => {
    expect(noopLax()).toEqual(undefined);
  });

  it('in callback', () => {
    expect(callback(noopLax)).toEqual(undefined);
  })
});
