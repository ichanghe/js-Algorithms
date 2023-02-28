// 双指针
function findPalindromeNumber2(max) {
  const res = [];
  if (max <= 0) return res;
  for (let i = 1; i <= max; i++) {
    const s = i.toString();
    const length = s.length;

    let flag = true;
    let startIndex = 0;
    let endIndex = length - 1;
    while (startIndex < endIndex) {
      if (s[startIndex] !== s[endIndex]) {
        flag = false;
        break;
      } else {
        startIndex++;
        endIndex--;
      }
    }
    if (flag == true) res.push(i);
  }
  return res;
}
// 生成反转数
function findPalindromeNumber3(max) {
  const res = [];
  if (max <= 0) return res;
  for (let i = 1; i <= max; i++) {
    let n = i;
    let rev = 0;
    while (n > 0) {
      rev = rev * 10 + (n % 10);
      n = Math.floor(n / 10);
    }
    if (i == rev) res.push(i);
  }
  return res;
}
