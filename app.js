function one(a, c) {
  return c(a);
}

console.log(
  one(6, (a) => {
    a++;
    return a;
  })
);
