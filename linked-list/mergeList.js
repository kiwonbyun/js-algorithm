import { createLinkedList, ListNode, printList } from "./createLinkedList.js";

function mergeList(l1, l2) {
  let dummy = new ListNode(null);
  let current = dummy;

  while (l1 && l2) {
    if (l1.value < l2.value) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  if (l1) {
    current.next = l1;
  } else {
    current.next = l2;
  }

  return dummy.next;
}

const l1 = createLinkedList([1, 2, 4]);
const l2 = createLinkedList([2, 3, 4, 5]);

printList(mergeList(l1, l2));
