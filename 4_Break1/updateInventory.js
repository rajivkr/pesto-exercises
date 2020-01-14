let updateInventory = (arr1, arr2) => {
  arr2.forEach(secondArrElement => {
    let firstArrPosition = arr1
      .map(firstArrElement => firstArrElement[1])
      .indexOf(secondArrElement[1]);
    if (firstArrPosition === -1) arr1.push(secondArrElement);
    else arr1[firstArrPosition][0] += secondArrElement[0];
  });
  return arr1.sort((a, b) => a[1] > b[1]);
};

export { updateInventory };
