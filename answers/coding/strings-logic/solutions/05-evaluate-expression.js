function evaluate(expr) {
  const nums = [];
  const ops = [];
  const prec = { "+": 1, "-": 1, "*": 2, "/": 2 };

  const apply = () => {
    const b = nums.pop();
    const a = nums.pop();
    const op = ops.pop();
    if (op === "+") nums.push(a + b);
    else if (op === "-") nums.push(a - b);
    else if (op === "*") nums.push(a * b);
    else nums.push(Math.trunc(a / b));
  };

  let i = 0;
  while (i < expr.length) {
    const ch = expr[i];
    if (ch >= "0" && ch <= "9") {
      let num = 0;
      while (i < expr.length && expr[i] >= "0" && expr[i] <= "9") {
        num = num * 10 + Number(expr[i++]);
      }
      nums.push(num);
      continue;
    }
    while (ops.length && prec[ops.at(-1)] >= prec[ch]) apply();
    ops.push(ch);
    i++;
  }

  while (ops.length) apply();
  return nums[0];
}

module.exports = { evaluate };
