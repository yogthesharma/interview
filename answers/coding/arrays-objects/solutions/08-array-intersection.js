function intersection(a, b) {
  const setB = new Set(b);
  const seen = new Set();
  const result = [];
  for (const x of a) {
    if (setB.has(x) && !seen.has(x)) {
      seen.add(x);
      result.push(x);
    }
  }
  return result;
}

module.exports = { intersection };
