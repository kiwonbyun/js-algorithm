const example = "aabbccccddeeee";

const removeDupl = (str) => {
  return [...new Set(str)].join("");
};

const removeDupl2 = (str) => {
  let result = "";
  let charMap = new Map();

  for (let char of str) {
    if (!charMap.has(char)) {
      charMap.set(char, true);
      result += char;
    }
  }

  return result;
};

console.log(removeDupl2(example));
