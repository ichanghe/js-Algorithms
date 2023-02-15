// 防抖
function debounce(callback, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      callback.apply(this, args);
    }, wait);
  }
}
// 测试用例 ---------------------------
function test() {
  console.log("Testing")
}
function test2() {
  console.log("Testing2")
}
let D = debounce(test2, 1000);
// debounce(test2, 1000);
setInterval(() => {
  D()
}, 5000)







// 节流-------------------
function throttle(callback, wait) {
  let time = null;
  return function (...args) {
    if (!time) {
      time = setTimeout(() => {
        time = null;
        callback.apply(this, args)
      }, wait)
    }
  }
}

function throttleTest() {
  console.log("Testing")
}
let t = throttle(throttleTest, 10000);
setInterval(() => {
  t()
}, 500)