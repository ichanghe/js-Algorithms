class Queue {
  constructor() {
    this.items = [];
  }
  front() {
    return this.items[0];
  }
  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {
    return this.items.shift();
  }
  toString() {
    return this.items.toString();
  }
  size() {
    return this.items.length;
  }
  isEmpty() {
    return this.size() == 0;
  }
}