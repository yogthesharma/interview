/**
 * Fix: serialize deposits so read-modify-write cannot interleave
 */

let balance = 0;
let chain = Promise.resolve();

function delay(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function deposit() {
  chain = chain.then(async () => {
    const current = balance;
    await delay(50);
    balance = current + 1;
  });
  return chain;
}

async function main() {
  await Promise.all([deposit(), deposit()]);
  console.log("balance:", balance, "(expected 2)");
}

main();
