let shifts = [
  { day: "пн", hours: 12 },
  { day: "вт", hours: 13 },
  { day: "ср", hours: 10 },
];
function countLongShifts(list) {
  let longShifts = list.filter(function (s) {
    return s.hours > 10;
  });
  return longShifts.length
}
function countShortShifts(list) {
  let shortShifts = list.filter(function (s) {
    return s.hours <= 10;
  });
  return shortShifts.length
}

console.log(countLongShifts(shifts), countShortShifts(shifts));
