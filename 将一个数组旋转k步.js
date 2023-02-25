function rotate(arr, k) {
  const length = arr.length;
  if (!k || length === 0) return arr;
  const step = Math.abs(k % length);

  const part1 = arr.slice(-step);
  const part2 = arr.slice(0, length - step);
  const part3 = part1.concat(part2);
  return part3;
}

// test
let arr = [1, 2, 3, 4];
const log = console.log;
log(rotate(arr, 2));
log(rotate(arr, 5));
