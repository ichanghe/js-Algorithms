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
moveZero2(arr);
console.log(arr);

// 双指针
function moveZero2(arr) {
  const length = arr.length;
  if (length == 0) return;
  let i;
  let j = -1;
  for (i = 0; i < length; i++) {
    if (arr[i] == 0) {
      if (j < 0) {
        j = i;
      }
    }
    if (arr[i] !== 0 && j >= 0) {
      const n = arr[i];
      arr[i] = arr[j];
      arr[j] = n;
      j++;
    }
  }
}
