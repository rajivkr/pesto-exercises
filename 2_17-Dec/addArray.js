const addArray = (firstArr, secondArr) => {
  if (
    !Array.isArray(firstArr) ||
    !Array.isArray(secondArr) ||
    firstArr.length < 1 ||
    secondArr.length < 1
  )
    throw new Error('One of the array is empty');
  const maxLenArr =
    firstArr.length > secondArr.length ? firstArr.length : secondArr.length;
  let arrContainsOtherTypes = false;
  let resultArr = [];
  for (let i = 0; i < maxLenArr; i++) {
    if (
      (firstArr[i] && isNaN(firstArr[i])) ||
      (secondArr[i] && isNaN(secondArr[i]))
    )
      arrContainsOtherTypes = true;
    let firstArrElement = firstArr[i] || 0,
      secondArrElement = secondArr[i] || 0;
    resultArr[i] = firstArrElement + secondArrElement;
  }
  if (arrContainsOtherTypes) throw new Error('Not a number');
  return resultArr;
};

export { addArray };
