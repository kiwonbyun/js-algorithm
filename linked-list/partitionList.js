import { createLinkedList, ListNode, printList } from "./createLinkedList.js";

function partitionList(head, p) {
  let smaller = new ListNode(null);
  let greater = new ListNode(null);
  let smallerPointer = smaller;
  let greaterPointer = greater;

  while (head) {
    if (head.value < p) {
      smallerPointer.next = head;
      smallerPointer = smallerPointer.next;
    } else {
      greaterPointer.next = head;
      greaterPointer = greaterPointer.next;
    }

    head = head.next;
  }
  greaterPointer.next = null;

  smallerPointer.next = greater.next;
  return smaller.next;
}

const list = createLinkedList([1, 4, 3, 2, 5, 2]);
const list2 = createLinkedList([1, 2, 4, 3, 5]);
const list3 = createLinkedList([2, 1, 3, 5, 2]);
printList(partitionList(list, 3));
printList(partitionList(list2, 4));
printList(partitionList(list3, 2));
