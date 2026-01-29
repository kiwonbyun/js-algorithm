import { createLinkedList, ListNode, printList } from "./createLinkedList.js";

function addTwoList(l1, l2) {
  let dummy = new ListNode(null);
  let current = dummy;
  let carry = undefined;

  let left = l1;
  let right = l2;

  while (left || right) {
    const sum = left.value + right.value;
    current.next = new ListNode(sum);
    current = current.next;

    left = left.next;
    right = right.next;
  }

  return dummy.next;
}

const l1 = createLinkedList([1, 3, 5]);
const l2 = createLinkedList([2, 4, 6]);
const l3 = createLinkedList([1, 2, 3]);
const l4 = createLinkedList([4, 5, 6]);
const l5 = createLinkedList([2, 4, 6]);
const l6 = createLinkedList([3, 5]);

printList(addTwoList(l1, l2));
