function isUnique(str) {
  const set = new Set();

  for (let i = 0; i < str.length; i++) {
    if (set.has(str[i])) {
      return false;
    }
    set.add(str[i]);
  }

  return true;
}

function findSubString(str) {
  let count = 0;
  for (let i = 0; i < str.length - 2; i++) {
    const substring = str.slice(i, i + 3);
    if (isUnique(substring)) {
      count++;
    }
  }

  return count;
}

console.log(findSubString("abcabc"));
console.log(findSubString("aaabbbccc"));
console.log(findSubString("xyzzaz"));
