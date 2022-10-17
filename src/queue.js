const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

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
class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.node = null
  }

  getUnderlyingList() {
    return this.node
  }

  enqueue(value) {
    if (this.node == null) {
      this.node = new ListNode(value)
    } else {
      let freeScope = this.node
      while (freeScope.next != null) {
        freeScope = freeScope.next
      }
      freeScope.next = new ListNode(value);
    }
  }

  dequeue() {
    let head = this.node
    if (this.node.next)
      this.node = this.node.next
    return head.value
  }
}

const queue = new Queue();
queue.enqueue(5)
queue.enqueue(8)
queue.enqueue(3)
queue.enqueue(7)
console.log(queue.dequeue())
console.log(queue.getUnderlyingList());

module.exports = {
  Queue
};
