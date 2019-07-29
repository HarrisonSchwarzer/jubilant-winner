function allLongestStrings(inputArray) {
  const lengthMap = inputArray.map(x => x.length);
  // console.log(lengthMap);
  let maxLength = Math.max(...lengthMap);
  // console.log('maxLength:', maxLength);
  let longestArr = [];
  for (let i = 0; i < lengthMap.length; i += 1) {
    if (lengthMap[i] == maxLength) {
      longestArr.push(i)
    };
  }
  let longestStrings = [];
  for (let j = 0; j < longestArr.length; j += 1) {
    longestStrings.push(inputArray[longestArr[j]]);
    // longestStrings.push(inputArr[j]);
  }
  return longestStrings;
}

const inputArray = ['aba',
  'aa',
  'ad',
  'vcd',
  'aba',
];

myStrings = allLongestStrings(inputArray);
console.log(myStrings);