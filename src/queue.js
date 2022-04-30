const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.queueHead = null;
  }

  getUnderlyingList() {
    return this.queueHead;
  }

  enqueue(value) {
    const oneMoreNode = new ListNode(value);

    if (this.queueHead === null) {
      this.queueHead = oneMoreNode;
    } else {
      let currNode = this.queueHead;

      while (currNode.next !== null) {
        currNode = currNode.next;
      }
      currNode.next = oneMoreNode;
    }
  }

  dequeue() {
    let currNode = this.queueHead;

    if (currNode !== null) {
      this.queueHead = currNode.next;
      return currNode.value;
    }
  }
}

module.exports = {
  Queue
};
