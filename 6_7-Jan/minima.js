let minima = (upperBound, inputArr) => {
  return inputArr.sort((a, b) => a - b).slice(0, upperBound);
};
export { minima };
