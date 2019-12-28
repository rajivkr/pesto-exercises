import { normalReverse, properReverse } from './reverse';

describe('reverse string', () => {
  it('should test any type of string', () => {
    expect(normalReverse('f')).toBe('f');
  });

  it('should test any type of string with unicode', () => {
    expect(properReverse('mañana')).toBe('anañam');
  });
});
