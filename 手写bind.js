Function.prototype.myBind = function (thisArg, ...argArray) {
  var fn = this
  thisArg = (thisArg != null && thisArg != undefined) ? Object(thisArg) : window;
  function proxyFn(...args) {
    thisArg.fn = fn
    var finalArgs = [...argArray, ...args]
    var result = thisArg.fn(...finalArgs)
    delete thisArg.fn
    return result
  }
  return proxyFn


}

Function.prototype.bind = function (context, ...innerArgs) {
  var me = this
  let f = function (...finnalyArgs) {
    return me.call(context, ...innerArgs, ...finnalyArgs)
  }
  f.prototype = this.prototype
  return f
}
Function.prototype.bind2 = function (context) {

  if (typeof this !== "function") {
    throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
  }

  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);

  var fNOP = function () { };

  var fBound = function () {
    var bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
  }

  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();
  return fBound;
}
let person = {
  name: 'Abiel'
}
function sayHi(age, sex) {
  console.log(this.name, age, sex);
}
let personSayHi = sayHi.bind(person, 25)
personSayHi('男')