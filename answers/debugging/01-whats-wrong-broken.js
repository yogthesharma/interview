/**
 * BUG: What's wrong? Run: node 01-whats-wrong-broken.js
 */

async function getUser(id) {
  const res = fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  return res.json();
}

async function main() {
  const user = await getUser(1);
  console.log("Name:", user.name);
}

main().catch(console.error);
