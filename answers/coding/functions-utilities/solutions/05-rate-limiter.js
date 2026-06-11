function createRateLimiter(maxCalls, windowMs) {
  const timestamps = [];

  function isAllowed() {
    const now = Date.now();
    while (timestamps.length && now - timestamps[0] >= windowMs) {
      timestamps.shift();
    }
    if (timestamps.length >= maxCalls) return false;
    timestamps.push(now);
    return true;
  }

  return { isAllowed };
}

module.exports = { createRateLimiter };
