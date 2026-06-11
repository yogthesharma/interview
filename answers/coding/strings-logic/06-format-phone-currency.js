/**
 * 06 — Format phone number + currency
 * Run: node 06-format-phone-currency.js
 *
 * formatPhone("1234567890") => "(123) 456-7890"
 * formatCurrency(1234.5) => "$1,234.50"
 */

const { runTests } = require("./test-utils");

/**
 * @param {string} digits — 10 digits
 * @returns {string}
 */
function formatPhone(digits) {
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

/**
 * @param {number} amount
 * @returns {string}
 */
function formatCurrency(amount) {
  const negative = amount < 0;
  const fixed = Math.abs(amount).toFixed(2);
  const [int, dec] = fixed.split(".");
  const withCommas = int.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `${negative ? "-" : ""}$${withCommas}.${dec}`;
}

let allPass = true;

allPass =
  runTests("formatPhone", (s) => formatPhone(s), [
    { input: "1234567890", expected: "(123) 456-7890" },
    { input: "0000000000", expected: "(000) 000-0000" },
  ]) && allPass;

allPass =
  runTests("formatCurrency", (n) => formatCurrency(n), [
    { input: 1234.5, expected: "$1,234.50" },
    { input: 1000000, expected: "$1,000,000.00" },
    { input: 0, expected: "$0.00" },
    { input: -99.9, expected: "-$99.90" },
  ]) && allPass;

process.exit(allPass ? 0 : 1);
