/**
 * 13 — Serialize concurrent calls: queue so only one async fn runs at a time
 * Run: node 13-serialize-concurrent.js
 *
 * const run = createSerialQueue();
 * run(() => task1()); run(() => task2()); — task2 starts after task1 finishes
 */

const { runAsyncTests, sleep } = require("./test-utils");

/**
 * @returns {(task: () => Promise<unknown>) => Promise<unknown>}
 */
function createSerialQueue() {
  let chain = Promise.resolve();

  return (task) => {
    const run = chain.then(() => task());
    chain = run.catch(() => {});
    return run;
  };
}

async function main() {
  const ok = await runAsyncTests("createSerialQueue", null, [
    {
      label: "runs tasks in order",
      input: null,
      check: async () => {
        const run = createSerialQueue();
        const order = [];

        await Promise.all([
          run(async () => {
            await sleep(30);
            order.push(1);
          }),
          run(async () => {
            order.push(2);
          }),
          run(async () => {
            order.push(3);
          }),
        ]);

        return order.join(",") === "1,2,3";
      },
    },
    {
      label: "returns task result",
      input: null,
      check: async () => {
        const run = createSerialQueue();
        const a = await run(async () => 10);
        const b = await run(async () => 20);
        return a === 10 && b === 20;
      },
    },
    {
      label: "propagates errors without breaking queue",
      input: null,
      check: async () => {
        const run = createSerialQueue();
        try {
          await run(async () => {
            throw new Error("boom");
          });
        } catch {
          /* expected */
        }
        const next = await run(async () => "ok");
        return next === "ok";
      },
    },
  ]);

  process.exit(ok ? 0 : 1);
}

main();
