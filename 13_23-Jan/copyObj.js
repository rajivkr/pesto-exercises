let cloneObject = sourceObj => {
  return Object.create(
    Object.getPrototypeOf(sourceObj),
    Object.getOwnPropertyDescriptors(sourceObj)
  );
};

export default cloneObject;
