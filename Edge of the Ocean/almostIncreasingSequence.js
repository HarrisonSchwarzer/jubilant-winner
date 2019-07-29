function almostIncreasingSequence(seq) {
  let bad = 0;
  for (let i = 1; i < seq.length; i += 1) {if (seq[i] <= seq[i - 1]) {
      bad++;
      if (bad > 1) return false;
      if (seq[i] <= seq[i - 2] && seq[i + 1] <= seq[i - 1]) return false;
    }}
  return true;
}

console.log(almostIncreasingSequence([1, 2, 5, 3, 5]));
