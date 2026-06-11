const { sleep } = require("../test-utils");

async function retryWithBackoff(fn, options = {}) {
  const { retries = 3, baseMs = 100 } = options;
  let attempt = 0;

  while (true) {
    try {
      return await fn();
    } catch (e) {
      if (attempt >= retries) throw e;
      await sleep(baseMs * 2 ** attempt);
      attempt++;
    }
  }
}

module.exports = { retryWithBackoff };
