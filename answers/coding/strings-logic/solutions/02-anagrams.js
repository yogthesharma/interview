function areAnagrams(a, b) {
  const norm = (s) =>
    s
      .toLowerCase()
      .replace(/\s/g, "")
      .split("")
      .sort()
      .join("");
  return norm(a) === norm(b);
}

module.exports = { areAnagrams };
