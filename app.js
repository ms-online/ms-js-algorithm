// function sumNumbers(numbers) {
//   return numbers[0] + numbers[1] + numbers[2]; // 1 => O(1) => 常数时间复杂度
// }

function sumNumbers(numbers) {
  // let result = 0; // 1
  // for (const number of numbers) {
  //   // 1
  //   console.log('123'); // 3 => n
  //   result += number; // 3 => n
  // }
  // return result; // 1
  return numbers.reduce((sum, number) => sum + number, 0); // O(n) =>线性时间复杂度
}

// T = 1 + 1 + n + n + 1  = 3 + 2n = 3 + 2*n;
// T = 2*n;
// T = n => O(n) => 线性时间复杂度

console.log(sumNumbers([1, 4, 7, 10]));
