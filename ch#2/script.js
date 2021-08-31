function convertToInt(num) {
  if (isNaN(num) && typeof(num) == "number") {
    console.log(0);
  } else if (typeof(num) == "number") {
    console.log(parseInt(num));
  } else {
    console.log(0);
    throw "Are you seriuos?! How am I supposed to convert that shit into an integer!";
  }
}


try {
  convertToInt(true);
} catch (exception) {
  console.error(exception);
}
