import { isPangram } from './pangram';

describe('check for pangramic string', () => {
  it('should test if given string is pangram', () => {
    expect(
      isPangram('the quick brown fox jumps over the lazy dog')
    ).toBeTruthy();
    expect(
      isPangram('a quick of the enemy will jeopardize gunboats')
    ).toBeFalsy();
  });
});
