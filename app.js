// function sumNumbers(numbers) {
//   return numbers[0] + numbers[1] + numbers[2]; // O(1)
// }

function sumNumbers(numbers) {
  let result = 0; //1
  for (const number of numbers) {
    console.log('running'); // 3 => n
    //1
    result += number; // 3 => n
  }
  return result; //1

  return numbers.reduce((sum, curNum) => sum + curNum, 0);
  // reduce函数：reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
}

//  T = 1 + 1 + n + n + 1 = 3 + 2*n =
//  T = 2*n
//  T = n => O(n) => 线性时间复杂度
// console.log(sumNumbers([1, 3, 10]));
