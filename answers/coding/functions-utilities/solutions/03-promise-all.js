function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) return resolve([]);
    const results = new Array(promises.length);
    let remaining = promises.length;

    promises.forEach((p, i) => {
      Promise.resolve(p)
        .then((value) => {
          results[i] = value;
          remaining--;
          if (remaining === 0) resolve(results);
        })
        .catch(reject);
    });
  });
}

module.exports = { promiseAll };
