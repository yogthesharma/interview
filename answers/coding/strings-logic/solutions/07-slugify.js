function slugify(str) {
  return str
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .join("-");
}

module.exports = { slugify };
