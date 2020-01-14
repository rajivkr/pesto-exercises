function curry(fn) {
  let args = fn.arguments;
  return (..._arg) => {
    return fn(...args, ..._arg);
  };
}

export { curry };
