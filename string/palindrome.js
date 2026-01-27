const isPalindrome = (str) => {
  const reverse = [...str].reverse().join("");
  return reverse === str;
};

// console.log(isPalindrome("abba"));
// console.log(isPalindrome("soccer"));
// console.log(isPalindrome("level"));

const isPalindrome2 = (str) => {
  const len = str.length;
  const mid = Math.floor(len / 2);

  for (let i = 0; i < mid; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }

  return true;
};

console.log(isPalindrome2("abba"));
console.log(isPalindrome2("soccer"));
console.log(isPalindrome2("level"));
