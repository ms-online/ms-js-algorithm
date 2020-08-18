// function isPowerOfTwo(number) {
//   if (number < 1) {
//     return false;
//   }
// if (number % 2 !== 0) {
//   return false;
// }
// return true;
// 12 / 2 = 6
// 6 / 2 = 3
// 3 / 2 = 1 ··· 1（余数）

//   let dividedNumber = number;
//   while (dividedNumber !== 1) {
//     if (dividedNumber % 2 !== 0) {
//       return false;
//     }
//     dividedNumber = dividedNumber / 2;
//   }
//   return true;
// }

// 最好情况： 13 => O(1);
// 平均情况：O(log n)
// 最差情况： 1125899906842624 => O(log n) 对数时间复杂度

// 第二种方法 按位与运算 &
function isPowerOfTwo(number) {
  if (number < 1) {
    return false;
  }

  return (number & (number - 1)) === 0; // 1
}

// T : O(1) 常数时间复杂度

console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(12));
console.log(isPowerOfTwo(13));
console.log(isPowerOfTwo(16));
