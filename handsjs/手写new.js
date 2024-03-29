function _new(fn, ...rest) {
  //基于fn的prototype构建对象的原型
  const thisObj = Object.create(fn.prototype);
  //继承父类原型上的方法 。将thisObj作为fn的this，继承其属性，并获取返回结果为result
  const result = fn.apply(thisObj, rest);
  //根据result对象的类型决定返回结果
  return typeof result === "object" ? result : thisObj;
}

function objectFactory() {
  var obj = new Object()
  let Constructor = [].shift.call(arguments);
  console.log(Constructor, 'constructor--')
  obj.__proto__ = Constructor.prototype;
  var ret = Constructor.apply(obj, arguments);
  return typeof ret === 'object' ? ret : obj;
};
function test() { }
console.log(objectFactory(test))