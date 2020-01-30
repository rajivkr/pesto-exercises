const bind = (functionToBind, context, ...remainingArgs) => {
  return functionToBind.bind(context, ...remainingArgs);
};

export { bind };
