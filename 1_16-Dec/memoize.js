const fact = (n, cache) => {
  cache = cache || {};
  if (cache[n]) {
    console.log(`Fetching from cache!`);
    return cache[n];
  }
  cache[n] = n == 0 ? 1 : n * fact(n - 1, cache);
  console.log(cache[n]);
  return cache[n];
};

console.log(fact(3));
console.log(fact(3));
