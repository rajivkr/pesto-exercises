# Expressing Programs Questions.

- Memoize

  ```
  Create a function memoize that caches another function.
  ```

  Example:

  ```javascript
  function expensiveOperation() {
    console.log('expensiveOperation function is called!');
    return 22;
  }
  const memoized = memoize(expensiveOperation); // <- memoize function
  console.log(memoized());
  console.log(memoized());
  ```
