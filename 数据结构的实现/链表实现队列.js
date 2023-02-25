class Myque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.len = 0;
  }
  add(n) {
    const newNode = {
      value: n,
      next: null,
    };

    // 处理head
    if (this.head == null) {
      this.head = newNode;
    }
    // 处理tail
    const tailNode = this.tail;
    if (tailNode) {
      tailNode.next = newNode;
    }
    this.tail = newNode;
    this.len++;
  }
  delete() {
    const headNode = this.head;
    if (headNode == null) return null;
    if (this.len <= 0) return null;
    // 取值
    const value = headNode.value;
    // 处理head
    this.head = headNode.next;
    // 记录长度
    this.len--;
    return value;
  }
  get length() {
    return len;
  }
}
