let substitionImpl = shiftArr => inputString => {
  console.log(shiftArr, inputString);
  return 'a';
};

let caesarCipher = (str, key) => {
  return str.replace(/[a-zA-Z]/g, c =>
    String.fromCharCode(((c.charCodeAt(0) - 65 + key) % 26) + 65)
  );
};

let substitutionCipher = substitionImpl();
console.log(substitutionCipher('ABC'));
