function moveZero(arr) {
  const length = arr.length;
  if (length == 0) return;
  let zeroLength = 0;
  for (let i = 0; i < length - zeroLength; i++) {
    if (arr[i] == 0) {
      arr.push(0);
      arr.splice(i, 1);
      i--;
      zeroLength++;
    }
  }
}
let arr = [0, 2, 3, 4, 0, 99];
moveZero(arr);
console.log(arr);
