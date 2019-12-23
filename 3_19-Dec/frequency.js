let sortBasedOnFrequency = (arrToSort = []) => {
  let frequencyObj = {};
  //initialising frequency to 0
  arrToSort.map(value => (frequencyObj[value] = 0));

  //Iterating the array to find out the frequency and filter out frequency of 1
  let uniqueElements = arrToSort.filter(val => ++frequencyObj[val] === 1);

  //Sorting unique elements.
  return uniqueElements.sort((a, b) => frequencyObj[b] - frequencyObj[a]);
};

export { sortBasedOnFrequency };
