import { sortBasedOnFrequency } from './frequency';

describe('reverse string', () => {
  it('should test sort array by frequency and remove duplicates', () => {
    expect(
      sortBasedOnFrequency(['a', 'z', 'z', 'z', '9', 'b', 'b', 'b', 'z'])
    ).toEqual(['z', 'b', 'a', '9']);
  });
});
