function hijriLeapYear(year) {
  return (year % 4 === 0);
}

function gregorianLeapYear(year) {
  return (year % 4 === 3);
}

console.log(hijriLeapYear(2021));
console.log(gregorianLeapYear(1400));