// Given two arrays, check if they have a common item.
// If they do, return true, else return false.

function commonArrItem(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return 'Invalid Input';
  if (!arr1.length || !arr2.length) return false;

  const itemsMap = {};

  arr1.forEach((item) => {
    itemsMap[item] = true;
  });

  for (let item of arr2) {
    if (itemsMap[item]) return true;
  }
  return false;
}

const res = commonArrItem([1, 2, 3], [0, 3, 5, 6, 8]);
console.log(res); // Output: true
