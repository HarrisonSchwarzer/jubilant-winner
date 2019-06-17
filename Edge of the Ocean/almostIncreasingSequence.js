function almostIncreasingSequence(sequence) {
  console.log('Oh boy! Look at this array:', sequence);
  console.log(`It's ${sequence.length} elements long!`);
  if (sequence.length == 2) {
    return true
  }
  let baddies = 0;
  for (i=0; i<sequence.length; i++) {
    if (baddies > 1) {
      return false
    }
    if (sequence[i] <= sequence[i-1]) {
      console.log(`I caught one at index ${i}! Take a look:`, sequence[i], sequence[i-1]);
      baddies += 1;
      if (sequence[i+1] <= sequence[i-1]) {
        return false
      }
    }
  }
  return true
}

console.log(
  almostIncreasingSequence([1, 3, 5, 3, 5])
);

