/*
push
pop
peek
clear
size
isEmpty
*/
class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  clear() {
    this.items = [];
  }
  size() {
    return this.items.length;
  }
  isEmpty() {
    return this.items.length == 0;
  }
}


// 封装十进制转二进制的函数
function dec2bin(decNumer) {
  // 定义变量
  var stack = new Stack()
  var remainder;

  // 循环除法
  while (decNumer > 0) {
    remainder = decNumer % 2
    decNumer = Math.floor(decNumer / 2)
    stack.push(remainder)
  }

  // 将数据取出
  var binayriStrng = ""
  while (!stack.isEmpty()) {
    binayriStrng += stack.pop()
  }
  return binayriStrng
}