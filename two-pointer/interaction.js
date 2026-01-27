function interaction(arr1, arr2) {
  const result = [];
  let left = 0;
  let right = 0;

  while (left < arr1.length && right < arr2.length) {
    if (arr1[left] === arr2[right]) {
      result.push(arr1[left]);
      left++;
      right++;
    } else if (arr1[left] < arr2[right]) {
      left++;
    } else {
      right++;
    }
  }

  return result;
}

console.log(interaction([1, 2, 3, 4], [2, 4, 6, 8]));
console.log(interaction([1, 2, 3, 4], [2, 3, 4, 5]));
console.log(interaction([0, 1, 2, 5], [4, 10, 11, 12]));

function interactionBruteForce(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        result.push(arr1[i]);
      }
    }
  }
  return result;
}

// console.log(interactionBruteForce([1, 2, 3, 4], [2, 4, 6, 8]));
// console.log(interactionBruteForce([1, 2, 3, 4], [2, 3, 4, 5]));
// console.log(interactionBruteForce([0, 1, 2, 5], [4, 10, 11, 12]));
