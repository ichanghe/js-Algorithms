// function flatten(arr) {
//   return arr.reduce((pre, cur) => {
//     return pre.concat(Array.isArray(cur) ? flatten(cur) : cur)
//   }, [])
// }
function flatten(arr) {
  while (arr.some(Array.isArray)) {
    arr = [].concat(...arr)
  }
  return arr
}
// function flatten(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       result.concat(flatten(arr[i]))
//     } else {
//       result.push(arr[i])
//     }
//   }
//   return result
// }
let arr = [1, [[2], 3]]
console.log(flatten(arr))