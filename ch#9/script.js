function hijriLeapYear(year) {
  return (year % 4 === 3);
}

function gregorianLeapYear(year) {
  return (year % 4 === 0);
}

console.log(hijriLeapYear(1400));
console.log(gregorianLeapYear(2021));