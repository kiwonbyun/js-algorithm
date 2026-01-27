const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  const str1Sort = [...str1].sort().join("");
  const str2Sort = [...str2].sort().join("");

  return str1Sort === str2Sort;
};

const isAnagram2 = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  const str1Map = new Map();

  for (w of str1) {
    str1Map.set(w, (str1Map.get(w) || 0) + 1);
  }

  for (w of str2) {
    if (str1Map.has(w) && str1Map.get(w) > 0) {
      str1Map.set(w, str1Map.get(w) - 1);
    } else {
      return false;
    }
  }
  return true;
};

console.log(isAnagram2("listen", "silent"));
console.log(isAnagram2("mouse", "moose"));
