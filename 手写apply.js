Function.prototype.myApply = function (context, params) {
  context = context ? Object(context) : window
  let fn = Symbol();
  context[fn] = this;
  let result = params ? context[fn](...params) : context[fn]();
  delete context[fn];
  return result;
}