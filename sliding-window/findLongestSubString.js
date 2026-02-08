function findLongestSubString(str) {
  let maxLength = 0;
  let start = 0;

  const charSet = new Set();

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];

    while (charSet.has(currentChar)) {
      charSet.delete(str[start]);
      start++;
    }

    charSet.add(currentChar);

    maxLength = Math.max(maxLength, i - start + 1);
  }

  return maxLength;
}

console.log(findLongestSubString("abcabcbb"));
console.log(findLongestSubString("aaaaa"));
console.log(findLongestSubString("abcde"));
