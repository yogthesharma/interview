function isValidParentheses(str) {
  const pairs = { ")": "(", "]": "[", "}": "{" };
  const stack = [];

  for (const ch of str) {
    if ("([{".includes(ch)) stack.push(ch);
    else if (")]}".includes(ch)) {
      if (stack.pop() !== pairs[ch]) return false;
    }
  }

  return stack.length === 0;
}

module.exports = { isValidParentheses };
