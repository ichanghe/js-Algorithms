const PENDING = "PENDING",
  FULFILLED = "FULFILLED",
  REJECTED = "REJECTED";
function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    return reject(
      new TypeError("Chaining cycle detected for promise #<MyPromise>")
    );
  }
  let called = false; //避免重复调用成功或失败的函数
  if ((typeof x === "object" && x !== null) || typeof x === "function") {
    try {
      let then = x.then; // throw error
      if (typeof then === "function") {
        //这就是 Promise
        then.call(
          x,
          (y) => {
            if (called) return;
            called = true;
            resolvePromise(promise2, y, resolve, reject);
          },
          (r) => {
            if (called) return;
            called = true;
            reject(r);
          }
        );
      } else {
        resolve(x);
      }
    } catch (e) {
      if (called) return;
      called = true;
      reject(e);
    }
  } else {
    resolve(x);
  }
}
class MyPromise {
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onResolveCallbacks = [];
    this.onRejectedCallbacks = [];
    const resolve = (value) => {
      if (value instanceof MyPromise) {
        value.then(resolve, reject);
        return;
      }
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = value;
        // 发布
        this.onResolveCallbacks.forEach((fn) => fn());
      }
    };
    const reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = reason;
        // 发布
        this.onRejectedCallbacks.forEach((fn) => fn());
      }
    };
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  // x 普通值  promise
  then(onFulfilled, onRejected) {
    // 可不传
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw reason;
          };
    let promise2 = new MyPromise((resolve, reject) => {
      if (this.status === FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      }
      if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      }
      if (this.status === PENDING) {
        // 订阅
        this.onResolveCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);
        });
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);
        });
      }
    });
    return promise2;
  }
  static all(promises) {
    let count = 0;
    let fullfilledCount = 0;
    const result = [];
    return new MyPromise((resolve, reject) => {
      try {
        for (let item of promises) {
          let i = count;
          count++;
          MyPromise.resolve(item)
            .then((data) => {
              result[i] = data;
              fullfilledCount++;
              if (count == fullfilledCount) {
                resolve(result);
              }
            })
            .catch(reject);
        }
        if (count === 0) {
          resolve(result);
        }
      } catch (error) {
        reject(error);
      }
    });
  }
  static allSettled(promises) {
    let count = 0;
    let fullfilledCount = 0;
    const result = [];
    return new MyPromise((resolve, reject) => {
      try {
        for (let item of promises) {
          let i = count;
          count++;
          MyPromise.resolve(item)
            .then((data) => {
              result[i] = {
                status: "fulfilld",
                value: data,
              };
              fullfilledCount++;
              if (count == fullfilledCount) {
                resolve(result);
              }
            })
            .catch((error) => {
              result[i] = {
                status: "rejected",
                reason: error,
              };
              fullfilledCount++;
              if (count == fullfilledCount) {
                resolve(result);
              }
            });
        }
        if (count === 0) {
          resolve(result);
        }
      } catch (error) {
        reject(error);
      }
    });
  }
  static race() {
    return new Promise((resolve, reject) => {
      for (let p of promises) {
        // Promise.resolve将p进行转化，防止传入非Promise实例
        // race执行机制为那个实例发生状态改变，则返回其对应结果
        // 因此监听
        MyPromise.resolve(p).then(resolve).catch(reject);
      }
    });
  }
  static any() {
    return new Promise((resolve, reject) => {
      let count = 0;
      let rejectCount = 0;
      let errors = [];
      let i = 0;
      for (let p of promises) {
        i = count;
        count++;
        MyPromise.resolve(p)
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            errors[i] = error;
            rejectCount++;
            if (rejectCount === count) {
              return reject(new AggregateError(errors));
            }
          });
      }
      if (count === 0)
        return reject(new AggregateError("All promises were rejected"));
    });
  }
  static resolve(param) {
    if (param instanceof Promise) return param;
    return new MyPromise((resolve, reject) => {
      if (param && param.then && typeof param.then === "function") {
        // param 状态变为成功会调用resolve，将新 Promise 的状态变为成功，反之亦然
        param.then(resolve, reject);
      } else {
        resolve(param);
      }
    });
  }
  finally(callback) {
    this.then(
      (value) => {
        return MyPromise.resolve(callback()).then(() => {
          return value;
        });
      },
      (error) => {
        return MyPromise.resolve(callback()).then(() => {
          throw error;
        });
      }
    );
  }

  reject() {
    return new MyPromise((resolve, reject) => {
      reject(reason);
    });
  }
  catch(errorCallback) {
    return this.then(null, errorCallback);
  }
}
MyPromise.defer = MyPromise.deferred = function () {
  let dfd = {};
  dfd.promise = new MyPromise((resolve, reject) => {
    dfd.resolve = resolve;
    dfd.reject = reject;
  });
  return dfd;
};
module.exports = MyPromise;
