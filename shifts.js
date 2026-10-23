let shifts = [
  { day: "пн", hours: 12 },
  { day: "вт", hours: 13 },
  { day: "ср", hours: 10 },
];

let longTotal = shifts
  .filter(function (s) {
    return s.hours > 10;
  })
  .reduce(function (acc, s) {
    return acc + s.hours;
  }, 0);

let allTotal = shifts.reduce(function (acc, s) {
  return acc + s.hours;
}, 0);
console.log(allTotal, longTotal);
