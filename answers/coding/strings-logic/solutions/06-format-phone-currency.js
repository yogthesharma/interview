function formatPhone(digits) {
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function formatCurrency(amount) {
  const negative = amount < 0;
  const fixed = Math.abs(amount).toFixed(2);
  const [int, dec] = fixed.split(".");
  const withCommas = int.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `${negative ? "-" : ""}$${withCommas}.${dec}`;
}

module.exports = { formatPhone, formatCurrency };
