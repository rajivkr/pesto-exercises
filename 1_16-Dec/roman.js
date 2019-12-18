const getRoman = inp => {
  if (isNaN(inp)) return NaN;
  let romanLiteralObj = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    },
    roman = '';

  for (let i of Object.keys(romanLiteralObj)) {
    let digit = Math.floor(inp / romanLiteralObj[i]);
    inp -= digit * romanLiteralObj[i];
    roman += i.repeat(digit);
  }
  return roman;
};

let memoizer = fun => {
  let cache = {};
  return n => {
    if (cache[n] != undefined) {
      console.log('Fetched from cache');
      return cache[n];
    } else {
      let result = fun(n);
      cache[n] = result;
      return result;
    }
  };
};

let getRomanMemoized = memoizer(getRoman);
console.log(getRomanMemoized(2821));
console.log(getRomanMemoized(2810));
console.log(getRomanMemoized(2810));

module.exports = {
  getRomanMemoized
};
