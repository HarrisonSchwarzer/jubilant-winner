function matrixElementsSum(matrix) {
  const ignoreSet = new Set();
  let matrixSum = 0;
  // iterate through rows
  for (let i = 0; i < matrix.length; i += 1) {
    console.log('row', i, ':', matrix[i], 'ignoreSet:', ignoreSet);
    for (let j = 0; j < matrix[i].length; j += 1) {
      console.log(matrix[i][j]);
      if (ignoreSet.has(j)) {

      }
      else if (matrix[i][j] === 0) {
        ignoreSet.add(j);
      } else (matrixSum += matrix[i][j]);
    }
  }
  return matrixSum;
}

const matrixA = [
  [1, 1, 1, 0],
  [0, 5, 0, 1],
  [2, 1, 3, 10],
];

const sum = matrixElementsSum(matrixA);
console.log('sum:', sum);
