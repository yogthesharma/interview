function rotateArray(arr, k) {
  if (arr.length === 0) return [];
  const steps = k % arr.length;
  return arr.slice(-steps).concat(arr.slice(0, -steps));
}

module.exports = { rotateArray };
