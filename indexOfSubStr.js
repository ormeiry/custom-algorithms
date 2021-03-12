// Given an array of chars, and an sub array of chars
// it finds the start index if the sub array found.

// With an object and Reduce.

function indexOf(str, subStr) {
  const neededLen = subStr.length - 1;

  const strMap = str.reduce((acc, _, i) => {
    let strKey = '';
    if (str[i + neededLen]) {
      for (let j = 0; j < subStr.length; j++) {
        strKey += str[i + j];
      }
      return { ...acc, [strKey]: i };
    } else {
      return { ...acc };
    }
  }, {});

  const strToCheck = subStr.join('');
  if (strToCheck in strMap) return strMap[strToCheck];

  return -1;
}

// The traditional way.

function tradIndexOf(str, subeStr) {
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < subeStr.length; j++) {
      if (str[i + j] !== subeStr[j]) {
        break;
      }
      if (j === subeStr.length - 1) {
        return i;
      }
    }
  }
  return -1;
}

const strArr = ['a', 'b', 'c', 'a', 'b', 'd'];
const subStrArr = ['a', 'b', 'd'];

const res = indexOf(strArr, subStrArr);
const res2 = tradIndexOf(strArr, subStrArr);
console.log('Index', res);
console.log('Index', res2);
