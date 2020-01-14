let aperture = (expectedTupleLength = 0, inputArr = []) => {
  if (expectedTupleLength > inputArr.length) return [];
  let resultArr = [];
  for (let [index, _] of inputArr.entries()) {
    if (index + expectedTupleLength <= inputArr.length)
      resultArr.push(inputArr.slice(index, index + expectedTupleLength));
  }
  return resultArr;
};

export { aperture };
