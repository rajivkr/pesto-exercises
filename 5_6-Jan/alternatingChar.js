let alternatingCharacters = (arrOfInputStrings = []) => {
  return arrOfInputStrings.map(input => {
    let minimumDeletionCount = 0;
    for (const [index, elem] of input.split('').entries()) {
      if (elem === input[index + 1]) minimumDeletionCount++;
    }
    return minimumDeletionCount;
  });
};

export { alternatingCharacters };
