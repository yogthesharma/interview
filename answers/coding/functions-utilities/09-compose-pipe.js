/**
 * 09 — compose and pipe (right-to-left vs left-to-right)
 * Run: node 09-compose-pipe.js
 *
 * compose(f, g)(x) === f(g(x))
 * pipe(f, g)(x) === g(f(x))
 */

const { runTests } = require("./test-utils");

/**
 * @param {...((x: unknown) => unknown)} fns
 * @returns {(x: unknown) => unknown}
 */
function compose(...fns) {
  return (x) => fns.reduceRight((acc, fn) => fn(acc), x);
}

/**
 * @param {...((x: unknown) => unknown)} fns
 * @returns {(x: unknown) => unknown}
 */
function pipe(...fns) {
  return (x) => fns.reduce((acc, fn) => fn(acc), x);
}

const double = (x) => x * 2;
const addOne = (x) => x + 1;

const ok = runTests("compose/pipe", () => null, [
  {
    label: "compose double then addOne",
    input: null,
    check: () => compose(addOne, double)(3) === 7,
  },
  {
    label: "pipe addOne then double",
    input: null,
    check: () => pipe(addOne, double)(3) === 8,
  },
  {
    label: "compose single fn",
    input: null,
    check: () => compose(double)(5) === 10,
  },
  {
    label: "pipe empty → identity",
    input: null,
    check: () => pipe()(42) === 42,
  },
]);

process.exit(ok ? 0 : 1);
