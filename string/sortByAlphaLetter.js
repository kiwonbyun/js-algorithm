const sortByAlphaLetter = (str) => {
  const arr = str
    .split(",")
    .map((item) => item.trim())
    .sort((a, b) => a.charCodeAt(1) - b.charCodeAt(1));
  console.log(arr);
};

const sortByAlphaLetter2 = (str) => {
  const words = str.split(", ");

  const sorted = words.sort((a, b) => a[1].localeCompare(b[1])).join(", ");
  return sorted;
};

console.log(sortByAlphaLetter2("3d, 1c, 5f, 7h, 2a, 4e, 6g"));
console.log(sortByAlphaLetter2("3d, 1a, 5e, 7d, 2a, 4c, 6b"));
