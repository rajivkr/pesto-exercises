const removeDuplicatesInArray = require('./removeDuplicateArray')
  .removeDuplicatesInArray;

describe('using memoize test cases', () => {
  it('should use it from cache', () => {
    expect(removeDuplicatesInArray([1, 2], [1, 2, 1, 4, 5])).toMatchSnapshot();
    expect(removeDuplicatesInArray([0], [-0])).toMatchSnapshot();
    expect(removeDuplicatesInArray([1, 2], [1, 2, 1, 3, 4])).toMatchSnapshot();
  });
});
