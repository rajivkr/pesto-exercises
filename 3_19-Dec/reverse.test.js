import { reverseString } from './reverse';

describe('reverse string', () => {
  it('should test any type of string', () => {
    expect(reverseString('f')).toBe('f');
  });
});
