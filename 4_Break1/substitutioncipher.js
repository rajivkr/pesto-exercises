let substitutionCipher = (str, amount = 1) => {
  return str.replace(/[a-zA-Z]/g, letter => {
    let asciiCode = letter.charCodeAt(0);

    // A - 4 B - 6
    amount = asciiCode % 2 === 0 ? 6 : 4;

    // Uppercase
    if (asciiCode >= 65 && asciiCode <= 90)
      letter = String.fromCharCode(((asciiCode - 65 + amount) % 26) + 65);
    // Lowercase
    else if (asciiCode >= 97 && asciiCode <= 122)
      letter = String.fromCharCode(((asciiCode - 97 + amount) % 26) + 97);

    return letter;
  });
};

export { substitutionCipher };
