const flattenArr = (arr = []) => {
  arr = arr.reduce((a, b) => {
    return a.concat(b);
  }, []);
  return arr;
};

export { flattenArr };
