function makePatternMap(pattern) {
  const patternMap = new Map();
  for (i in pattern) {
    if (patternMap.has(pattern[i])) {
      patternMap.get(pattern[i]).push(i);
    } else {
      patternMap.set(pattern[i], [i]);
    }
  }
  return patternMap;
}

function findMatchingPattern(words, pattern) {
  const matchingWords = [];
  const patternMap = makePatternMap(pattern);

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const wordMap = makePatternMap(word);

    if (word.length === pattern.length) {
      let isMatch = true;
      for (let j = 0; j < word.length; j++) {
        if (
          wordMap.get(word[j]).toString() !==
          patternMap.get(pattern[j]).toString()
        ) {
          isMatch = false;
          break;
        }
      }
      if (isMatch) {
        matchingWords.push(word);
      }
    }
  }
  return matchingWords;
}

console.log(findMatchingPattern(["cool", "gold", "pool", "noon"], "good"));
console.log(findMatchingPattern(["tea", "bat", "ate", "egg"], "add"));
console.log(findMatchingPattern(["a", "b", "c"], "a"));
