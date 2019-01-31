function subsetSumWithSubtraction(integers, target) {
  if (target === 0) return true;

  //If we can sum to target t, we can always sum to -t
  //by adding where we would otherwise subtract and subtracting where we would add.
  //As a result, we can simplify the problem by ignoring the target's cardinality
  if (target < 1) target *= -1;

  const highestPossibleSum = integers.reduce((a, b) => a + b, 0);
  if (target > highestPossibleSum) return false;

  //Initializes a matrix with one row for every integer (including zero),
  //and one column for every positive sum we could possibly encounter (including zero)
  let matrix = Array(integers.length + 1)
    .fill(null)
    .map(row => Array(highestPossibleSum + 1).fill(null));

  //Fills first matrix row; given no integers (except zero by default), only sum we can make is 0
  matrix[0] = Array(highestPossibleSum + 1).fill(false);
  matrix[0][0] = true;

  //Fills in the rest of the matrix; main part of the function
  fillMatrix(matrix, integers);

  //After considering every integer, can we make a sum equal to the target?
  return matrix[matrix.length - 1][target];
}

function fillMatrix(matrix, integers) {
  //For each of our integers besides zero
  for (let i = 1; i < matrix.length; i++) {
    let currentRow = matrix[i];
    let previousRow = matrix[i - 1];
    let currentInt = integers[i - 1];
    //Given the current integer and all previous integers in our set, what sums can we make?
    for (let j = 0; j < currentRow.length; j++) {
      let currentSum = j;
      if (
        //Were we already able to reach this sum from a previous subset?
        previousRow[currentSum] === true ||
        //Can we reach this sum by subtracting current integer from a sum we can already achieve?
        previousRow[currentSum - currentInt] === true ||
        //... or by adding the current integer to a sum we can achieve?
        previousRow[currentSum + currentInt] === true ||
        //Recall: If we can sum to target t, we can always sum to -t
        previousRow[-currentSum + currentInt] === true ||
        previousRow[-currentSum - currentInt] === true
      ) {
        currentRow[currentSum] = true;
      } else {
        currentRow[currentSum] = false;
      }
    }
  }
}

console.log(subsetSumWithSubtraction([2, 3, 7, 9], -2)); //Should be true
console.log(subsetSumWithSubtraction([2, 3, 7, 9], 22)); //Should be false
console.log(subsetSumWithSubtraction([50, 100, 25, 10], 160)); //Should be true
console.log(subsetSumWithSubtraction([50, 100, 25, 10], 91)); //Should be false

//As for Operational risks...
//This function doesn't do well with arbitrarily large numbers
//If we make the integers ten times larger, subsetSum will be ten times slower
//Which is not the case for functionally equivalent brute force solutions.
//Also, if you call subsetSum on integers that total to > 4.29 billion,
//You'll exceed Javascript's max array size and get an error.
