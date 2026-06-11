/**
 * Predict output BEFORE running.
 * Then: node 02-what-will-this-output.js
 */

console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

console.log("4");
