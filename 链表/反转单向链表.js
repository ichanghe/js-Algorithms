function revertLinklist(listNode) {
  let prevNode;
  let curNode;
  let nextNode = listNode;
  while (nextNode) {
    if (curNode && !prevNode) {
      delete curNode.next;
    }
    if (curNode && prevNode) {
      curNode.next = prevNode;
    }
    prevNode = curNode;
    curNode = nextNode;
    nextNode = nextNode?.next;
  }
  curNode.next = prevNode;
}
