function format(n) {
  n = Math.floor(n);
  const s = n.toString();
  const arr = s.split("").reverse();
  return arr.reduce((prev, val, index) => {
    if (index % 3 === 0) {
      if (prev) {
        return val + "," + prev;
      } else {
        return val;
      }
    } else {
      return val + prev;
    }
  }, "");
}
let num = 2334412313;
console.log(format(num));
