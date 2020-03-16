const counter = (startsWith = 0) => {
  let currentValue = startsWith;
  return (incrementBy = 1) => {
    currentValue += incrementBy;
    return currentValue;
  };
};

export { counter };
