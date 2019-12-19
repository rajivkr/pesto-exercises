import { sumOfFibs } from './sumOfFib';

describe('sum of odd Fib test cases', () => {
  it('should add Odd fib until given number', () => {
    expect(sumOfFibs(20)).toMatchSnapshot();
    expect(sumOfFibs(30)).toMatchSnapshot();
  });
});
