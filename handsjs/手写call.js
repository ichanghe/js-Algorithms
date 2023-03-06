Function.prototype.myCall = function (context, ...params) {
  context = context ? Object(context) : window
  let fn = Symbol();
  context[fn] = this;
  let result = context[fn](...params);
  delete context[fn];
  return result;
}
