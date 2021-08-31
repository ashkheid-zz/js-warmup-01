function isEven(num) {
  if (isNaN(num) || typeof(num) != "number") {
    throw "The argument you passed is not a number! please pass a number.";
  }

  return (num % 2 !== 0);
}

try {
  console.log(isEven(33));
} catch (exception) {
  console.error(exception);
}
