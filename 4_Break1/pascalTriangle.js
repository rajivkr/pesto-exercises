let getPascalsTriangle = maxRows => {
  let resultArr = [];
  for (let row = 0; row < maxRows; row++) {
    resultArr[row] = [];
    for (let col = 0; col < row + 1; col++) {
      if (col === 0 || col === row) {
        resultArr[row][col] = 1;
      } else {
        resultArr[row][col] =
          resultArr[row - 1][col - 1] + resultArr[row - 1][col];
      }
    }
  }
  return resultArr;
};

class Triangle {
  constructor(numOfRows) {
    this.numOfRows = numOfRows;
  }

  get rows() {
    return getPascalsTriangle(this.numOfRows);
  }
}

export { Triangle };
