let checkBalancedBraces = inputString => {
  let outputStack = [];

  let openingBrace = {
    '{': '}',
    '[': ']',
    '(': ')'
  };

  let closingBrace = [')', ']', '}'];

  for (let i = 0; i < inputString.length; i++) {
    let char = inputString[i];

    if (openingBrace[char]) {
      outputStack.push(char);
    } else if (closingBrace.indexOf(char) >= 0) {
      if (openingBrace[outputStack.pop()] !== char) return false;
    }
  }
  return outputStack.length === 0;
};

export { checkBalancedBraces };
