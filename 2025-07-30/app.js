function one(a, b, callback) {
  a++;
  b++;
  return callback(a, b);
}

console.log(
  one(1, 2, function (a, b) {
    let result = a + b;
    return result;
  })
);
console.log(
  one(10, 20, function (a, b) {
    let result = a - b;
    return result;
  })
);
