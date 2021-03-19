// Given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.

// Input: list1 = [2,4,3], list2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

const addTwoNumbers = function (l1, l2) {
  let current1 = l1;
  let current2 = l2;

  let firstStr = '';
  let secondStr = '';

  while (current1) {
    firstStr += current1.val;
    current1 = current1.next;
  }

  while (current2) {
    secondStr += current2.val;
    current2 = current2.next;
  }

  // Instead of doing the *Carry* way, I solve this problem by
  // using JS special powers. It might be less efficient, but it's much more fun.
  const res =
    +firstStr.split('').reverse().join('') +
    +secondStr.split('').reverse().join('');
  const newArr = res.toString().split('');

  const listHead = new ListNode(newArr.pop());
  let newListCurr = listHead;
  while (newArr.length !== 0) {
    newListCurr.next = new ListNode(newArr.pop());
    newListCurr = newListCurr.next;
  }
  return listHead;
};
