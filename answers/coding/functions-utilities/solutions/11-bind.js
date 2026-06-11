function myBind(fn, thisArg, ...boundArgs) {
  return (...args) => fn.apply(thisArg, [...boundArgs, ...args]);
}

module.exports = { myBind };
