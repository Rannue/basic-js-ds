const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}

let list = convertArrayToList([3, 1, 3, 3, 6, 3, 5])

function removeKFromList(l, k) {
  let currentNode = l
  let prevNode = currentNode
  while (currentNode != null) {
    if (currentNode.value == k) {
      let p = prevNode
      let c = currentNode
      while (c != null && c.value == k) {
        c = c.next
      }
      p.next = c
    }
    prevNode = currentNode
    currentNode = currentNode.next
  }

  node = l;
  return (node.value != k) ? l : node.next
}

console.log(removeKFromList(list, 3))

module.exports = {
  removeKFromList
};
