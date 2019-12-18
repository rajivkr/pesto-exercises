const removeDuplicatesInArray = (duplicateArr = [], distinctArr = []) => {
  const duplicateArrAsSet = new Set(duplicateArr);
  return distinctArr.filter(value => !duplicateArrAsSet.has(value));
};

console.log(removeDuplicatesInArray([1, 2], [1, 2, 1, 4, 5]));
console.log(removeDuplicatesInArray([0], [-0]));
console.log(removeDuplicatesInArray([1, 2], [1, 2, 1, 3, 4]));

module.exports = {
  removeDuplicatesInArray
};
