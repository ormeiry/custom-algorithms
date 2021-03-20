// Given a sorted array nums, remove the duplicates **in-place** such that
// each element appears only once and returns the new length.

const removeDuplicates = (nums) => {
  for (i = 0; i < nums.length; i++) {
    let count = 1;
    while (nums[i] === nums[i + count]) {
      count++;
    }
    if (count > 1) nums.splice(i + 1, count - 1);
  }
  return nums.length;
};

console.log(removeDuplicates([1, 1, 1, 2, 2, 3, 3, 4, 5]));
// Output: 5, the array is now [1, 2, 3, 4, 5]
