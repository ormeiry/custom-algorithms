// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Input: str = "([)]"
// Output: false

// Input: str = "{[]}"
// Output: true

const isValid = function (str) {
  const comMap = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
      arr.push(str[i]);
    } else {
      if (arr[arr.length - 1] === comMap[str[i]]) {
        arr.pop();
      } else return false;
    }
  }
  return arr.length === 0;
};
