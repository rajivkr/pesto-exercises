const checkForIsomorphicsm = ([string1, string2]) => {
  if (string1.length !== string2.length) return false;
  let letterObj = {};

  for (let i = 0; i < string1.length; i++) {
    const letter1 = string1[i],
      letter2 = string2[i];
    if (letterObj[letter1] === undefined) {
      letterObj[letter1] = letter2;
    } else if (letterObj[letter1] !== letter2) {
      return false;
    }
  }
  return true;
};

export { checkForIsomorphicsm };
