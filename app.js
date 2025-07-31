function outerFunction() {
  function innerFunctionone() {
    return 10;
  }
  function innerFunctiontwo() {
    return 20;
  }
  let result = innerFunctionone() + innerFunctiontwo();
  return result;
}

console.log(outerFunction());
console.log(innerFunctionone());
