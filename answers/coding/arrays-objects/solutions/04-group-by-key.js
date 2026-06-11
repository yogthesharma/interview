function groupBy(items, key) {
  return items.reduce((acc, item) => {
    const k = String(item[key]);
    (acc[k] ??= []).push(item);
    return acc;
  }, {});
}

module.exports = { groupBy };
