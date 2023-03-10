// n*logn
function quickSort(arr) {
  const length = arr.length;
  if (length === 0) return arr;
  const midIndex = Math.floor(length / 2);
  const midValue = arr.splice(midIndex, 1)[0];

  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    const n = arr[i];
    if (n < midValue) {
      left.push(n);
    } else {
      right.push(n);
    }
  }
  return quickSort(left).concat([midValue], quickSort(right));
}
