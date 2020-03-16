const memoizer = (funcToCall, keyMaker = JSON.stringify) => {
  let inMemoryCache = new Map();
  return valueToProcess => {
    const keyToProcess = keyMaker(valueToProcess);
    if (inMemoryCache.has(keyToProcess)) {
      console.log('Fetching from cache');
      return inMemoryCache.get(keyToProcess);
    } else {
      const processedValue = funcToCall(valueToProcess);
      inMemoryCache.set(keyToProcess, processedValue);
      return processedValue;
    }
  };
};

let cacheFunction = inputFunction => {
  return memoizer(inputFunction);
};

export { cacheFunction };
