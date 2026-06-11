function paginate(items, { page, pageSize }) {
  const total = items.length;
  const totalPages = pageSize > 0 ? Math.ceil(total / pageSize) : 0;
  const start = (page - 1) * pageSize;
  const data = start >= total ? [] : items.slice(start, start + pageSize);
  return { data, page, pageSize, total, totalPages };
}

module.exports = { paginate };
