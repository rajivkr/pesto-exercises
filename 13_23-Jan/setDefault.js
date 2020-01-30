let setDefaultProperty = (objToCheckDefault, defaultValue) => {
  const handler = {
    get: function(target, name) {
      return target.hasOwnProperty(name) ? target[name] : defaultValue;
    }
  };
  return new Proxy(objToCheckDefault, handler);
};

export default setDefaultProperty;
