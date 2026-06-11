/**
 * BUG: Race — run twice; balance often 1 instead of 2
 * node 03-race-condition-broken.js
 */

let balance = 0;

function delay(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function deposit() {
  const current = balance;
  await delay(50);
  balance = current + 1;
}

async function main() {
  await Promise.all([deposit(), deposit()]);
  console.log("balance:", balance, "(expected 2)");
}

main();
