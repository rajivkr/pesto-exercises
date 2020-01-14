let curry = (fn, ...args) => {
  if (fn.length <= args.length) {
    console.log('final', ...args);
    return fn(...args);
  }
  return (...more) => {
    console.log(...args, ...more);
    return curry(fn, ...args, ...more);
  };
};

const add = curry((a, b, c) => {
  return a + b + c;
});

console.log(add(1, 2)(3));
console.log(add(1)(2)(3));

//export { curry };
