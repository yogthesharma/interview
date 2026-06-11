function lengthOfLongestSubstring(str) {
  const seen = new Map();
  let max = 0;
  let start = 0;

  for (let end = 0; end < str.length; end++) {
    const ch = str[end];
    if (seen.has(ch) && seen.get(ch) >= start) {
      start = seen.get(ch) + 1;
    }
    seen.set(ch, end);
    max = Math.max(max, end - start + 1);
  }

  return max;
}

module.exports = { lengthOfLongestSubstring };
