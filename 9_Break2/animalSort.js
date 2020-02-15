let animalSorter = (animalsList = []) => {
  if (animalsList.length < 1) return [];

  return animalsList.sort((animalObj1, animalObj2) => {
    let differenceInLegsCount =
      animalObj1.numberOfLegs - animalObj2.numberOfLegs;
    if (differenceInLegsCount !== 0) {
      return differenceInLegsCount;
    }

    let animal1Name = animalObj1.name,
      animal2Name = animalObj2.name;
    let comparison = 0;
    if (animal1Name > animal2Name) {
      comparison = 1;
    } else if (animal1Name < animal2Name) {
      comparison = -1;
    }
    return comparison;
  });
};

export { animalSorter };
