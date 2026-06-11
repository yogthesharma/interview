/**
 * 10 — Valid email and URL (practical regex — not RFC-perfect)
 * Run: node 10-valid-email-url.js
 */

const { runTests } = require("./test-utils");

/**
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * @param {string} url
 * @returns {boolean}
 */
function isValidUrl(url) {
  return /^https?:\/\/[^\s/$.?#].[^\s]*$/i.test(url);
}

let allPass = true;

allPass =
  runTests("isValidEmail", (s) => isValidEmail(s), [
    { input: "user@example.com", expected: true },
    { input: "bad@", expected: false },
    { input: "no-at.com", expected: false },
    { input: "a@b.co", expected: true },
  ]) && allPass;

allPass =
  runTests("isValidUrl", (s) => isValidUrl(s), [
    { input: "https://example.com", expected: true },
    { input: "http://localhost:3000/path", expected: true },
    { input: "ftp://files.com", expected: false },
    { input: "not-a-url", expected: false },
    { input: "https://", expected: false },
  ]) && allPass;

process.exit(allPass ? 0 : 1);
