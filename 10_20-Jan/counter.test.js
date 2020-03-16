import { counter } from './counter';

describe('counter', () => {
  it('should return a function', () => {
    expect(typeof counter()).toBe('function');
  });
  it('The counter function should return the correct result', () => {
    const newCounter = counter();
    expect(newCounter()).toBe(1);
    expect(newCounter()).toBe(2);
    expect(newCounter()).toBe(3);
    expect(newCounter()).toBe(4);
  });
});
