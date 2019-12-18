const removeDuplicatesInArray = (duplicateArr = [], distinctArr = []) => {
  const duplicateArrAsSet = new Set(duplicateArr);
  return distinctArr.filter(value => {
    return (
      !duplicateArrAsSet.has(value) ||
      !Object.is(value, duplicateArr[duplicateArr.indexOf(value)])
    );
  });
};

module.exports = {
  removeDuplicatesInArray
};
