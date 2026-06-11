function flattenObject(obj, prefix = "") {
  const out = {};
  for (const [key, value] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (value !== null && typeof value === "object" && !Array.isArray(value)) {
      Object.assign(out, flattenObject(value, path));
    } else {
      out[path] = value;
    }
  }
  return out;
}

module.exports = { flattenObject };
