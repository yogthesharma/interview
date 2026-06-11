function myMap(arr, fn) {
  const out = [];
  for (let i = 0; i < arr.length; i++) out.push(fn(arr[i], i, arr));
  return out;
}

function myFilter(arr, fn) {
  const out = [];
  for (let i = 0; i < arr.length; i++) if (fn(arr[i], i, arr)) out.push(arr[i]);
  return out;
}

function myReduce(arr, fn, initial) {
  let acc = initial;
  for (let i = 0; i < arr.length; i++) acc = fn(acc, arr[i], i, arr);
  return acc;
}

module.exports = { myMap, myFilter, myReduce };
