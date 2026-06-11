/**
 * 03 — Promise.all from scratch
 * Run: node 03-promise-all.js
 */

const { runAsyncTests } = require("./test-utils");

/**
 * @param {Promise<unknown>[]} promises
 * @returns {Promise<unknown[]>}
 */
function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) resolve([]);
    const resultArr = new Array(promises.length);
    let remaining = promises.length;

    promises.forEach((promise, i) => {
      Promise.resolve(promise)
        .then((data) => {
          resultArr[i] = data;
          remaining--;
          if (remaining === 0) resolve(resultArr);
        })
        .catch(reject);
    });
  });
}

async function main() {
  const ok = await runAsyncTests("promiseAll", (input) => promiseAll(input), [
    {
      input: [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)],
      expected: [1, 2, 3],
    },
    {
      input: [],
      expected: [],
    },
    {
      input: [Promise.resolve("a"), Promise.resolve("b")],
      expected: ["a", "b"],
    },
    {
      label: "preserves order",
      input: [
        new Promise((r) => setTimeout(() => r("slow"), 30)),
        Promise.resolve("fast"),
      ],
      expected: ["slow", "fast"],
    },
    {
      label: "rejects if any rejects",
      input: [Promise.resolve(1), Promise.reject(new Error("fail"))],
      check: async (input) => {
        try {
          await promiseAll(input);
          return false;
        } catch (e) {
          return e.message === "fail";
        }
      },
    },
  ]);

  process.exit(ok ? 0 : 1);
}

main();
