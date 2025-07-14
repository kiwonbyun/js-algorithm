function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[j - 1] > array[j]) {
        const temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
      }
    }
  }
}

function bubbleSort2(array) {
  array.map((el1) =>
    array.map((el2, i) => {
      if (array[i] > array[i + 1]) {
        array[i] = array[i + 1];
        array[i + 1] = el2;
      }
    })
  );
  return array;
}

let target = [4, 1, 0, 6, 2, 3, 1, 9];

console.log(bubbleSort2(target));
