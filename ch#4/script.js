function stringToArray(str) {
  let arr = [];
  for (let char of str) {
    arr.push(char);
  }
  return arr;
}

let test = stringToArray("I'm a normal boy.");
console.log(test);