const fact = () => {
  let factorialCache = {};
  return (factRecursive = n => {
    if (factorialCache[n] !== undefined) {
      console.log('Factorial fetched from factorialCache');
      return factorialCache[n];
    } else {
      let result = n == 0 ? 1 : n * factRecursive(n - 1, factorialCache);
      factorialCache[n] = result;
      return result;
    }
  });
};

let factMemo = fact();
console.log(factMemo(3));
console.log(factMemo(4));
console.log(factMemo(3));
