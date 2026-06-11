function firstNonRepeatingChar(str) {
  const counts = new Map();
  for (const ch of str) counts.set(ch, (counts.get(ch) ?? 0) + 1);
  for (const ch of str) if (counts.get(ch) === 1) return ch;
  return "";
}

module.exports = { firstNonRepeatingChar };
