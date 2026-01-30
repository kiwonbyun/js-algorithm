import { createLinkedList, printList } from "./createLinkedList.js";

function reverseList(head) {
  let leftPointer = null;
  let rightPointer = head;
  while (rightPointer) {
    const nextPoint = rightPointer.next;
    rightPointer.next = leftPointer;
    leftPointer = rightPointer;
    rightPointer = nextPoint;
  }

  return leftPointer;
}

const list = createLinkedList([1, 2, 3, 4, 5]);

printList(reverseList(list));
