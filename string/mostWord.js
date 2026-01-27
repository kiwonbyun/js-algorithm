const mostWord = (str) => {
  const words = str.toLowerCase().split(/\W+/);
  const map = new Map();

  words.forEach((word) => {
    map.set(word, (map.get(word) || 0) + 1);
  });

  const wordsArray = Array.from(map);
  wordsArray.sort((a, b) => b[1] - a[1]);
  console.log(wordsArray);

  return wordsArray[0][0];
};

console.log(mostWord("Hello world! this is a test string, hello hello test"));
