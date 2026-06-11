function flattenArray(arr) {
  return arr.reduce((acc, item) => {
    acc.push(...(Array.isArray(item) ? flattenArray(item) : [item]));
    return acc;
  }, []);
}

module.exports = { flattenArray };
