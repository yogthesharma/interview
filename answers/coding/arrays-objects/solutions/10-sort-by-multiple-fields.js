function sortByMultipleFields(items, fields) {
  return [...items].sort((a, b) => {
    for (const field of fields) {
      if (a[field] < b[field]) return -1;
      if (a[field] > b[field]) return 1;
    }
    return 0;
  });
}

module.exports = { sortByMultipleFields };
