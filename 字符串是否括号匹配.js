function isMatch(left, right) {
  if (left === "{" && right === "}") return true;
  if (left === "(" && right === ")") return true;
  if (left === "[" && right === "]") return true;
  return false;
}
function test(str) {
  let length = str.length;

  const stack = [];
  const leftSymbols = "{[(";
  const rightSymbols = "}])";
  for (let i = 0; i < length; i++) {
    const s = str[i];
    if (leftSymbols.includes(s)) {
      stack.push(s);
    } else if (rightSymbols.includes(s)) {
      const top = stack[stack.length - 1];
      if (isMatch(top, s)) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}
const log = console.log;
let string = "";
log(test(string));
