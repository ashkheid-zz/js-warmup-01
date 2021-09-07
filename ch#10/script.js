let produc_count = 5;

function increase(num = 1) {
  if (num > 1 && num >= produc_count) {
    produc_count = num;
    return produc_count;
  }
  return ++produc_count;
}

function decrease(num = 1) {
  if (produc_count === 0 || produc_count < num) {
    return console.log("ERROR!");
  } else if (num > 1 && num <= produc_count) {
    produc_count = num;
    return produc_count;
  }
  return --produc_count;
}

console.log(produc_count);