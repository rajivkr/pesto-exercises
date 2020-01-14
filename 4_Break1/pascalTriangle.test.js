import { Triangle } from './pascalTriangle';

describe('check for print pascal triangle of given length', () => {
  it('should test if give pascal triangle', () => {
    expect(new Triangle(3).rows).toEqual([[1], [1, 1], [1, 2, 1]]);

    const twentieth = [
      1,
      19,
      171,
      969,
      3876,
      11628,
      27132,
      50388,
      75582,
      92378,
      92378,
      75582,
      50388,
      27132,
      11628,
      3876,
      969,
      171,
      19,
      1
    ];
    expect(new Triangle(20).rows[19]).toEqual(twentieth);
  });
});
