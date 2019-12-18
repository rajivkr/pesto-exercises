const fact = n => (n == 0 ? 1 : n * fact(n - 1));

const memoizer = (funcToCall, keyMaker = JSON.stringify) => {
  let inMemoryCache = new Map();
  return valueToProcess => {
    const keyToProcess = keyMaker(valueToProcess);
    if (inMemoryCache.has(keyToProcess)) {
      console.log(`Fetching from cache`);
      return inMemoryCache.get(keyToProcess);
    } else {
      const processedValue = funcToCall(valueToProcess);
      inMemoryCache.set(keyToProcess, processedValue);
      return processedValue;
    }
  };
};

let factMemo = memoizer(fact);
console.log(factMemo(3));
console.log(factMemo(4));
console.log(factMemo(3));

module.exports = {
  factMemo
};
