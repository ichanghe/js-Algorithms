class Myque {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }
  add(item) {
    this.stack1.push(item);
  }
  delete() {
    let res;
    const stack1 = this.stack1;
    const stack2 = this.stack2;
    while (stack1.length) {
      const n = stack1.pop();
      if (n !== null) {
        stack2.push(n);
      }
    }
    res = stack2.pop();
    while (stack2.length) {
      const n = stack2.pop();
      if (n != null) {
        stack1.push(n);
      }
    }
    return res || null;
  }
  get length() {
    return this.stack1.length;
  }
}
//
let q = new Myque();
q.add(1);
q.add(2);
console.log(q.length, "llll");
