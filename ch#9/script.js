function hijriLeapYear(year) {
  let num = 0.24219858156;
  let a = (year + 2346) * num;
  return a - parseInt(a) < num;
}

function gregorianLeapYear(year) {
  /*
  if (year is not divisible by 4) then (it is a common year)
  else if (year is not divisible by 100) then (it is a leap year)
  else if (year is not divisible by 400) then (it is a common year)
  else (it is a leap year)
  */
  if (year % 4 !== 0) {
    return false;
  } else if (year % 100 !== 0) {
    return true;
  } else if (year % 400 !== 0) {
    return false;
  } else {
    return true;
  }
}

console.log(hijriLeapYear(1400));
console.log(gregorianLeapYear(2021));
