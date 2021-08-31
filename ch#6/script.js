function sizeOfSmallestWord(str) {
  let minLength = 100;
  let currentWordLength = 0;
  for (let char of str) {
    if (char !== " ") {
      ++currentWordLength;
    } else {
      if (currentWordLength < minLength) {
        minLength = currentWordLength;
      }
      currentWordLength = 0;
    }
  }

  return minLength;
}

let test = sizeOfSmallestWord("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, quisquam!");
console.log(test);