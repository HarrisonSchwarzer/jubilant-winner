function makeArrayConsecutive2(statues) {
  steps = statues.length
  minNum = Math.min(...statues);
  maxNum = Math.max(...statues);
  return maxNum - minNum - steps + 1
}

console.log(
  makeArrayConsecutive2([6, 2, 3, 8])
);