function switchLetterCase(s) {
  let res = "";
  const length = s.length;
  if (length == 0) return res;
  for (let i = 0; i < length; i++) {
    const c = s[i];
    const code = c.charCodeAt(0);
    if (code >= 65 && code <= 90) {
      res += c.toLowerCase();
    } else if (code >= 97 && code <= 122) {
      res += c.toUpperCase();
    } else {
      res += c;
    }
  }
  return res;
}

let str = "abcDEF124";
console.log(switchLetterCase(str));
