const flatten = require('./flatten');

describe('flatten array test cases', () => {
  it('should flatten the given array', () => {
    expect(flatten.flattenArr([1, 2, [3, 4, [5, 6]]])).toMatchSnapshot();
  });
});
