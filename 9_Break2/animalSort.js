let animalSorter = (animalsList = []) => {
  if (animalsList.length < 1) return [];

  return animalsList.sort((animalObj1, animalObj2) => {
    return (
      animalObj1.numberOfLegs - animalObj2.numberOfLegs ||
      animalObj1.name - animalObj2.name
    );
  });
};

export { animalSorter };
