import { alternatingCharacters } from './alternatingChar';

describe('check for minimum deletions needed', () => {
  it('should test if need given amount of deletions', () => {
    expect(
      alternatingCharacters(['AAAA', 'BBBBB', 'ABABABAB', 'BABABA', 'AAABBB'])
    ).toEqual([3, 4, 0, 0, 4]);
    expect(alternatingCharacters(['ABBABBAA'])).toEqual([3]);
  });
});
