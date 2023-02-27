function findContinuousChar(str) {
  const res = {
    char: "",
    length: 0,
  };
  const length = str.length;
  if (length == 0) return res;
  let tempLength = 0;
  let i = 0;
  let j = 0;
  for (; i < length; i++) {
    if (str[i] == str[j]) {
      tempLength++;
    }
    if (str[i] !== str[j] || i == length - 1) {
      if (tempLength > res.length) {
        res.char = str[i];
        res.length = tempLength;
      }
      tempLength = 0;
      if (i < length - 1) {
        j = i;
        i--;
      }
    }
  }
  return res;
}
