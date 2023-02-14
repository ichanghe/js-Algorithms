function curry(fn, args) {
  var args = args || [];
  return function () {
    const newArgs = args.concat(Array.prototype.slice.call(arguments));
    if (newArgs.length < fn.length) {
      return curry.call(this, fn, newArgs)
    } else {
      return fn.apply(this, newArgs)
    }
  }
}