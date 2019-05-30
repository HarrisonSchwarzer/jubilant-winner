function almostIncreasingSequence(sequence) {
  if (sequence.length == 1) {
    return true;
  }
  for (i = 1; i < sequence.length; i++) {
    // if (i == 0) {
    //   continue;
    // }
    if (sequence[i] < sequence[i-1]) {
      sequence.splice(i,1)
      for (i = 1; i < sequence.length; i++) {
        console.log(sequence);
        if (sequence[i] < sequence[i-1] ) {
          console.log(sequence[i]);
          console.log(sequence[i-1]);
          return false;
        } 
        if (i == sequence.length - 1) {
          console.log(sequence[i]);
          console.log(sequence[i-1]);
          return true
        }
      }
    }
  }
}

console.log(
  almostIncreasingSequence([1, 2, 1]) 
);