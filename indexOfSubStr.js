// With an object and Reduce

function indexOf(str, subStr) {
  const neededLen = subStr.length - 1;

  const strMap = str.reduce((acc, _, i) => {
    let strKey = '';
    if (str[i + neededLen]) {
      for (j = 0; j < subStr.length; j++) {
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

// The traditional way

function tradIndexOf(str, subeStr) {
  for (var i = 0; i < str.length; i++) {
    for (var q = 0; q < subeStr.length; q++) {
      if (str[i + q] !== subeStr[q]) {
        break;
      }
      if (q === subeStr.length - 1) {
        return i;
      }
    }
  }
  return -1;
}

const res = indexOf(['a', 'b', 'c', 'a', 'b', 'd'], ['a', 'b', 'd']);
const res2 = tradIndexOf(['a', 'b', 'c', 'a', 'b', 'd'], ['a', 'b', 'd']);
console.log('Index', res);
console.log('Index', res2);
