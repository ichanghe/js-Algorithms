function deepClone(origin, hashMap = new Map()) {
  if (origin == undefined || typeof origin !== 'object') {
    return origin
  }
  if (origin instanceof Date) {
    return new Date(origin)

  }
  if (origin instanceof RegExp) {
    return new RegExp(origin)
  }
  const hashKey = hashMap.get(origin)
  if (hashKey) {
    return hashkey
  }
  const target = new origin.constructor() //有括号或者没有括号都可以，因为没传参
  hashMap.set(origin, target)
  for (let k in origin) {
    if (origin.hasOwnProperty(k)) {
      target[k] = deepClone(origin[k])
    }
  }
  return target
}
// 测试
let obj = { a: 1, b: 2 }
let copyObj = deepClone(obj)
copyObj.a = 2
console.log(obj, copyObj)