# Expressing Programs Questions.

- [Memoize](https://www.notion.so/Memoize-faecc963d4f34b1c8acb10ce99590df9)

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

- [Convert to Roman](https://www.notion.so/Convert-to-Roman-5aa3c6818d9b48e6a52ad240aebb581c)

  ```
  Write a function that converts integers into their equivalent roman numbers.
  ```

  Example:

  ```javascript
  convertIntToRoman(12); //XII
  ```

- [Flatten](https://www.notion.so/Flatten-825f4d60b7ce4dfdbb907b9f2434b746)

  ```
   Write a function that takes an array and flattens all the nested arrays.
   The default flattening level is 1.
  ```

  Example:

  ```javascript
  flatten([1, 2, [3, 4, [5, 6]]]); // [1, 2, 3, 4, [5, 6]]
  ```

- [Sum of Fibs](https://www.notion.so/Sum-of-Fibs-ab94cfa29b3b4575adb5a8d20469f068)

  ```
  Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

  The first two numbers in the Fibonacci sequence are 1 and 1.

  Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
  ```

  Example:

  ```javascript
  sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.
  ```
