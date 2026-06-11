function findMissing(nums, n) {
  const expected = (n * (n + 1)) / 2;
  const actual = nums.reduce((sum, x) => sum + x, 0);
  return expected - actual;
}

module.exports = { findMissing };
