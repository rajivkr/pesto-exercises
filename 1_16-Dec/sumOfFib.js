let fibo = n => {
  if (n <= 1) return n;
  return fibo(n - 1) + fibo(n - 2);
};

let sumOfFibs = num => {
  let result = 0,
    i = 1;
  while (result < num) {
    let currentFib = fibo(i);
    if (currentFib % 2) {
      result += currentFib;
    }
    i++;
  }
  return result;
};

export { sumOfFibs };
