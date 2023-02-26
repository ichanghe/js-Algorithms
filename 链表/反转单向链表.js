function revertLinklist(listNode) {
  let prevNode;
  let curNode;
  let nextNode = listNode;
  while (nextNode) {
    if (curNode && !prevNode) {
      delete curNode.next;
    }
    // 反转指针
    if (curNode && prevNode) {
      curNode.next = prevNode;
    }
    // 整体向右移动
    prevNode = curNode;
    curNode = nextNode;
    nextNode = nextNode?.next;
  }
  // 最后一个补充
  curNode.next = prevNode;
}
