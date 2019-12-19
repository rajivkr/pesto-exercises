import { getRomanMemoized as romanize } from './roman';

describe('convert to roman test cases', () => {
  it('should convert given num to roman letter', () => {
    expect(romanize(5)).toMatchSnapshot();
    expect(romanize(500)).toMatchSnapshot();
  });
});
