import { factMemo as memoize } from './memoize';

describe('using memoize test cases', () => {
  it('should use it from cache', () => {
    let res = `${memoize(5)} + ${memoize(6)} + ${memoize(5)}`;
    expect(res).toMatchSnapshot();
  });
});
