Object.myCreate = function (proto, propertyObject = undefined) {
  if (propertyObject === null) {
    // 这里没有判断propertyObject是否是原始包装对象
    throw "TypeError";
  } else {
    function Fn() {}
    Fn.prototype = proto;
    const obj = new Fn();
    if (propertyObject !== undefined) {
      Object.defineProperties(obj, propertyObject);
    }
    if (proto === null) {
      // 创建一个没有原型对象的对象，Object.create(null)
      obj.__proto__ = null;
    }
    return obj;
  }
};
