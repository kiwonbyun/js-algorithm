const rotateString = (str, goal) => {
  let i = 1;
  while (i < str.length) {
    const left = str.slice(i);
    const right = str.slice(0, i);
    const fixed = left + right;
    if (fixed === goal) {
      return true;
    }
    i++;
  }

  return false;
};

console.log(rotateString("javascript", "scriptjava"));
console.log(rotateString("abc", "cba"));
