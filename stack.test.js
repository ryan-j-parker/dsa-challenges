const { describe, it } = require('@jest/globals');
const { Stack } = require('./stack.js');

describe('Stack', () => {
  it('removes an item', () => {
    const myStack = new Stack(4, 6, 8);
    myStack.pop();
    expect(myStack.readableList).toEqual('6,8');
  });

  it('adds an item', () => {
    const myStack = new Stack(4, 6, 8);
    myStack.push(3);
    expect(myStack.readableList).toEqual('4,6,8,3');
  });

  it('shows last item added', () => {
    const myStack = new Stack(4, 6, 8);
    expect(myStack.peek).toBe(8);
  });
});
