// Given 4 numbers 0 - 9,  creating the maximum time.
// 1, 2, 3, 4 -> 23:41

function time(A, B, C, D) {
  const clock = {
    leftHour: { max: 2, startPlacing: true },
    rightHour: { max: 3, startPlacing: false },
    leftMin: { max: 5, startPlacing: false },
    rightMin: { max: 9, startPlacing: false },
  };
  let intArr = [A, B, C, D];
  let clockString = '';
  intArr.sort();
  while (intArr.length !== 0) {
    for (let i = intArr.length - 1; i >= 0; i--) {
      if (clock.leftHour.startPlacing && intArr[i] <= clock.leftHour.max) {
        clockString = addToClockAndRemoveFromArray(
          clock,
          'leftHour',
          clockString,
          intArr,
          i
        );
        if (+clockString[0] < 2) {
          clock.rightHour.max = 9;
        } else {
          i = intArr.length - 1;
        }
        clock.rightHour.startPlacing = true;
      } else if (
        clock.rightHour.startPlacing &&
        intArr[i] <= clock.rightHour.max
      ) {
        clockString = addToClockAndRemoveFromArray(
          clock,
          'rightHour',
          clockString,
          intArr,
          i
        );
        clock.leftMin.startPlacing = true;
      } else if (clock.leftMin.startPlacing && intArr[i] <= clock.leftMin.max) {
        clockString = addToClockAndRemoveFromArray(
          clock,
          'leftMin',
          clockString,
          intArr,
          i
        );
        clock.rightMin.startPlacing = true;
      } else if (clock.rightMin.startPlacing && intArr[i] <= clock.rightMin.max)
        clockString = addToClockAndRemoveFromArray(
          clock,
          'rightMin',
          clockString,
          intArr,
          i
        );
    }
  }
  return clockString;
}

function addToClockAndRemoveFromArray(
  clockObj,
  currClockPos,
  currClock,
  currArr,
  index
) {
  let newClockStr = currClock + currArr[index];
  clockObj[currClockPos].startPlacing = false;
  currArr.splice(index, 1);
  return newClockStr;
}
