import { createLinkedList, ListNode, printList } from "./createLinkedList.js";

function addTwoList(l1, l2) {
  let dummy = new ListNode(null);
  let current = dummy;
  let carry = 0;

  while (l1 || l2 || carry) {
    const l1Value = l1 ? l1.value : 0;
    const l2Value = l2 ? l2.value : 0;

    const sum = l1Value + l2Value + carry;

    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
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
