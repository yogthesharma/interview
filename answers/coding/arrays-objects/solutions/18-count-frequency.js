function countWordFrequency(text) {
  if (!text.trim()) return {};
  return text
    .trim()
    .split(/\s+/)
    .map((w) => w.toLowerCase())
    .reduce((acc, word) => {
      acc[word] = (acc[word] ?? 0) + 1;
      return acc;
    }, {});
}

module.exports = { countWordFrequency };
