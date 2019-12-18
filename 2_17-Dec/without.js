const removeDuplicatesInArray = (sourceArr = [], arrToRemove = []) => {
  const sourceArrAsSet = new Set(sourceArr);
  return arrToRemove.filter(value => !sourceArrAsSet.has(Math.abs(value)));
};

console.log(removeDuplicatesInArray([1, 2], [1, 2, 1, 4, 5]));
console.log(removeDuplicatesInArray([0], [-0]));
console.log(removeDuplicatesInArray([1, 2], [1, 2, 1, 3, 4]));

module.exports = {
  removeDuplicatesInArray
};
