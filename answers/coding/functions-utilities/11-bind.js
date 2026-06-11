/**
 * 11 — bind from scratch (no Function.prototype.bind)
 * Run: node 11-bind.js
 */

const { runTests } = require("./test-utils");

/**
 * @param {(...args: unknown[]) => unknown} fn
 * @param {unknown} thisArg
 * @param {...unknown} boundArgs
 * @returns {(...args: unknown[]) => unknown}
 */
function myBind(fn, thisArg, ...boundArgs) {
  return (...args) => fn.apply(thisArg, [...boundArgs, ...args]);
}

const ok = runTests("myBind", () => null, [
  {
    label: "binds this",
    input: null,
    check: () => {
      const obj = {
        x: 10,
        getX() {
          return this.x;
        },
      };
      const bound = myBind(obj.getX, obj);
      return bound() === 10;
    },
  },
  {
    label: "partial application",
    input: null,
    check: () => {
      const add = (a, b, c) => a + b + c;
      const add5 = myBind(add, null, 2, 3);
      return add5(10) === 15;
    },
  },
  {
    label: "bound this + partial args",
    input: null,
    check: () => {
      const obj = {
        factor: 2,
        mul(x, y) {
          return (x + y) * this.factor;
        },
      };
      const fn = myBind(obj.mul, obj, 3);
      return fn(4) === 14;
    },
  },
]);

process.exit(ok ? 0 : 1);
