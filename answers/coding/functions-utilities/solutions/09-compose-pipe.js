function compose(...fns) {
  return (x) => fns.reduceRight((acc, fn) => fn(acc), x);
}

function pipe(...fns) {
  return (x) => fns.reduce((acc, fn) => fn(acc), x);
}

module.exports = { compose, pipe };
