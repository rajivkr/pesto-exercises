const flattenArr = (arr = []) => {
  arr = arr.reduce((a, b) => {
    return a.concat(b);
  }, []);
  return arr;
};

console.log(flattenArr([1, 2, [3, 4, [5, 6]]]));

module.exports = {
  flattenArr
};
