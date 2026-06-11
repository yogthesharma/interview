function createSerialQueue() {
  let chain = Promise.resolve();

  return (task) => {
    const run = chain.then(() => task());
    chain = run.catch(() => {});
    return run;
  };
}

module.exports = { createSerialQueue };
