function expandFromCenter(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return s.slice(left + 1, right);
}

const findLongestPalindrome = (str) => {
  let longest = "";
  for (let i = 0; i < str.length; i++) {
    // 중간지점이 홀수이면
    let curr = expandFromCenter(str, i, i);
    if (curr.length > longest.length) {
      longest = curr;
    }
    // 중간지점이 짝수이면
    curr = expandFromCenter(str, i, i + 1);
    if (curr.length > longest.length) {
      longest = curr;
    }
  }
  return longest;
};

console.log(findLongestPalindrome("acacbbca"));
console.log(findLongestPalindrome("ababab"));
console.log(findLongestPalindrome("abc"));
console.log(findLongestPalindrome("banana"));
