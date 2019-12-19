import { removeDuplicatesInArray } from './removeDuplicateArray';

describe('removing Duplicates test cases', () => {
  it('should remove from first array', () => {
    expect(removeDuplicatesInArray([1, 2], [1, 2, 1, 4, 5])).toMatchSnapshot();
    expect(removeDuplicatesInArray([0], [-0]).length).toEqual(1);
    expect(removeDuplicatesInArray([1, 2], [1, 2, 1, 3, 4])).toMatchSnapshot();
  });
});
