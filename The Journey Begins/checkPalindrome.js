function checkPalindrome(inputString) {
  const splitString = inputString.split('');
  const reverseArray = splitString.reverse();
  const joinArray = reverseArray.join('');
  return inputString === joinArray;
}

console.log(
  checkPalindrome('poopy')
);