import { checkForIsomorphicsm as isomorphic } from './isomorphic.js';

describe('check for isomorphicsm tests', () => {
  it('should test if values are isomorphic', () => {
    expect(isomorphic(['eggs', 'addd'])).toBe(true);
    // expect(isomorphic(['foo', 'bar'])).toBe(false);
    // expect(isomorphic(['asdfghjkl', 'qwertyuio'])).toBe(true);
    // expect(isomorphic(['asdfgsjkl', 'qwertyuio'])).toBe(false);
    // expect(isomorphic(['better', 'fetter'])).toBe(true);
  });
});
