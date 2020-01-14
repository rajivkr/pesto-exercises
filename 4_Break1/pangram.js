const isPangram = string =>
  new Set(string.toLowerCase().match(/[a-z]/gi)).size === 26;

export { isPangram };
