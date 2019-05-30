function adjacentElementsProduct(inputArray) {
  let maxNum = -1000000;
  for (let i = 0; i < inputArray.length; i++) {
    let compNum = inputArray[i-1] * inputArray[i];
    // console.log(compNum);
    if (compNum > maxNum ){
      maxNum = compNum;
    }
  }
  return maxNum;
}

// console.log(
//   adjacentElementsProduct([3, 6, -2, -5, 7, 3])
// );
