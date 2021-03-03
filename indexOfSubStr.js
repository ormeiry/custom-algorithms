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

const res = indexOf(['a', 'b', 'c', 'a', 'b', 'd'], ['a', 'b', 'd']);
console.log('Index', res);
