function findTwoNumbers(arr, n) {
  const res = [];
  const length = arr.length;
  if (length == 0) return res;
  for (let i = 0; i < length - 1; i++) {
    const n1 = arr[i];
    let flag = false;
    for (let j = i + 1; j < length; j++) {
      const n2 = arr[j];
      if (n1 + n2 == n) {
        res.push(n1);
        res.push(n2);
        flag = true;
        break;
      }
    }
    if (flag) break;
  }
  return res;
}
let arr = [1, 2, 3, 4, 5];
console.log(findTwoNumbers2(arr, 5));
// 双指针
function findTwoNumbers2(arr, n) {
  let res = [];
  const length = arr.length;
  if (length === 0) return true;
  let i = 0;
  let j = length - 1;
  while (i < j) {
    const n1 = arr[i];
    const n2 = arr[j];
    let sum = n1 + n2;
    if (sum > n) {
      j--;
    } else if (sum < n) {
      i++;
    } else {
      res.push(n1);
      res.push(n2);
      break;
    }
  }
  return res;
}
