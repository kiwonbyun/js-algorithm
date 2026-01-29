export function ListNode(val) {
  this.value = val;
  this.next = null;
}

export function createLinkedList(arr) {
  const head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
}

export function printList(head) {
  let current = head;
  const values = [];
  while (current) {
    values.push(current.value);
    current = current.next;
  }

  console.log(values.join(" -> "));
}
