const reverseString = (strToReverse = '') => {
  return strToReverse
    .split()
    .reverse()
    .join();
};

export { reverseString };
