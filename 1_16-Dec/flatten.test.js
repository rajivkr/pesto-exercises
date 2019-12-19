import { flattenArr } from './flatten';

describe('flatten array test cases', () => {
  it('should flatten the given array', () => {
    expect(flattenArr([1, 2, [3, 4, [5, 6]]])).toMatchSnapshot();
  });
});
