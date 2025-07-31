const asset = {
  first: "son",
  second: "jm",
};

function third(object) {
  if (typeof object === "object") {
    let result = object.second + object.first;
    return result;
  } else {
    // console.log("메개변수 객체여야됨요");
    return "";
  }
}

console.log(third(asset));
console.log(third(1));
