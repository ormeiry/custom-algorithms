// Given the head of a linked list, remove the nth node from the end of the list and return its head.

/*
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]


Input: head = [1], n = 1
Output: []


Input: head = [1,2], n = 1
Output: [1]
*/

const removeNthFromEnd = function (head, n) {
  if (n === 0) return head;
  if (n === 1 && !head.next) return null;

  let jumps = 0;

  let currNode = head;
  let qHead = head;

  while (currNode) {
    if (jumps === n + 1) {
      qHead = qHead.next;
      jumps--;
    }
    currNode = currNode.next;
    jumps++;
  }

  if (jumps < n + 1) return qHead.next;
  qHead.next = qHead.next.next;

  return head;
};
