// Write a stack class for number values, and a way to
// show the minimum value inside the stack at any given time.

class Stack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(value) {
    this.stack.push(value);
    if (
      !this.minStack.length ||
      value <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(value);
    }
  }

  pop() {
    if (
      this.stack[this.stack.length - 1] ===
      this.minStack[this.minStack.length - 1]
    )
      this.minStack.pop();

    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  showMin() {
    console.log('Stack minimum value', this.minStack[this.minStack.length - 1]);
  }

  logStacks() {
    console.log('Main Stack: ', newStack.stack);
    console.log('Minimum numbers stack', newStack.minStack);
  }
}

const newStack = new Stack();

newStack.push(1);
newStack.push(8);
newStack.push(0);
newStack.push(-4);
newStack.push(-122);
newStack.pop();
newStack.push(5);

newStack.logStacks();
newStack.showMin();
