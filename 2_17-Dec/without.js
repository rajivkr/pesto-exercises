const includes = (search, arr) => {
  return !arr.indexOf(search);
};

const without = (xs, list) => {
  return list.filter(search => !includes(search, xs));
};

const removeDuplicatesInArray = (sourceArr = [], arrToRemove = []) => {
  const sourceArrAsSet = new Set(sourceArr);
  return arrToRemove.filter(value => !sourceArrAsSet.has(Math.abs(value)));
};

console.log(removeDuplicatesInArray([1, 2], [1, 2, 1, 4, 5]));
console.log(without([0], [-0]));
console.log(without([1, 2], [1, 2, 1, 3, 4]));

module.exports = {
  removeDuplicatesInArray
};
