function countSetsOfThree(numbers: number[], threshold: number) {
  const arrLen = numbers.length;
  if (arrLen < 3) {
    console.error("Error: numbers array requires at least 3 numbers");
    return;
  }
  let index0End = arrLen - 3;
  let index1End = arrLen - 2;
  let index2End = arrLen - 1;

  let index0 = 0;
  let index1 = 1;
  let index2 = 2;
  let greaterThanThreshold = 0;

  while (true) {
    if (index0 === index0End && index1 === index1End && index2 === index2End) {
      if (isGreaterThanThreshold(numbers, index0, index1, index2, threshold)) {
        greaterThanThreshold++;
      }
      return greaterThanThreshold;
    }

    if (isGreaterThanThreshold(numbers, index0, index1, index2, threshold)) {
      greaterThanThreshold++;
    }

    if (index1 === index1End && index2 === index2End) {
      index0++;
      index1 = index0 + 1;
      index2 = index0 + 2;
    } else if (index2 === index2End) {
      index1++;
      index2 = index1 + 1;
    } else {
      index2++;
    }
  }
}

function isGreaterThanThreshold(
  arr: number[],
  index0: number,
  index1: number,
  index2: number,
  threshold: number
): boolean {
  return arr[index0] + arr[index1] + arr[index2] <= threshold;
}
append(`countSetsOfThree([1,2,3,4], 7)`, countSetsOfThree([1, 2, 3, 4], 7), 2);
append(`countSetsOfThree([4,1,3,2], 7)`, countSetsOfThree([4, 1, 3, 2], 7), 2);
append(`countSetsOfThree([1,2,3,9], 7)`, countSetsOfThree([1, 2, 3, 9], 7), 1);
append(`countSetsOfThree([2,2,2,2], 7)`, countSetsOfThree([2, 2, 2, 2], 7), 4);
append(`countSetsOfThree([3,3,3,3], 7)`, countSetsOfThree([3, 3, 3, 3], 7), 0);
append(
  `countSetsOfThree([1,2,3,4,5], 7)`,
  countSetsOfThree([1, 2, 3, 4, 5], 7),
  2
);

function append(description: string, actual: number, expected: number) {
  const item = document.createElement("div");
  item.textContent = `${description}. Expected: ${expected}. Actual: ${actual}.`;
  document.querySelector("#results").append(item);
}
