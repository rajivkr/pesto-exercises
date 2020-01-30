let personObj = {
  name: 'Rajiv',
  age: 27
};

const printPerson = function(state, country) {
  console.log(
    `${this.name} is ${this.age} years old and is from ${state}, ${country}`
  );
};

let printPersonUsingBind = printPerson.bind(personObj, 'Chennai');
printPersonUsingBind('India');

Function.prototype.myCustomBind = function(...args) {
  let methodToCall = this,
    contextForMethod = args[0],
    outerParams = args.slice(1);
  return function(...innerParams) {
    methodToCall.apply(contextForMethod, [...outerParams, ...innerParams]);
  };
};

let printPersonUsingCustomBind = printPerson.myCustomBind(personObj, 'Chennai');
printPersonUsingCustomBind('India');
