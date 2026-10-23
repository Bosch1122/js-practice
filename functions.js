let shifts = [
  { day: "пн", hours: 12 },
  { day: "вт", hours: 13 },
  { day: "ср", hours: 10 },
];
function countLongShifts(list) {
  let longShifts = list.filter(function (s) {
    return s.hours > 10;
  });
  return longShifts.length;
}
function countShortShifts(list) {
  let shortShifts = list.filter(function (s) {
    return s.hours <= 10;
  });
  return shortShifts.length;
}

function shiftType(hours) {
  if (hours <= 6) return "короткая";
  if (hours <= 10) return "обычная";
  return "длинная";
}

function describeShift(shift) {
  return `${shift.day}: ${shift.hours} ч, ${shiftType(shift.hours)}`;
}

shifts.forEach(function (s) {
  console.log(describeShift(s));
});
