function fact(number) {
  let result = 1; // 0的阶乘为1；
  for (let i = 2; i <= number; i++) {
    result = result * i;
  }
  return result;
}

// T : O(n);
//空间复杂度：O(1) => 常数空间复杂度

console.log(fact(3));
console.log(fact(4));
console.log(fact(5));
