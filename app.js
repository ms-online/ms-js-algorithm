// for循环实现阶乘问题
// function fact(number) {
//   let result = 1; // 0的阶乘为1；
//   for (let i = 2; i <= number; i++) {
//     result = result * i;
//   }
//   return result;
// }

// T : O(n);
// 空间复杂度：O(1) 常数空间复杂度

// 递归实现阶乘问题
function fact(number) {
  if (number === 1) {
    //1
    //base case 基准情形
    return 1; //1
  }
  return number * fact(number - 1); // 1
}

// 3 * fact（2）
//     2 * fact(1)
//            1
// 3 * 2 * 1 =6

// 每个被调用的函数的时间复杂度：O(1) ;
// 当触发多个被调用的函数的时候，n个被调用的函数
// T = n * O(1) => O(n);
// T = 1 * n = n => O(n);

//空间复杂度：O(n) 线性空间复杂度
console.log(fact(3)); // 3 * 2 * 1 = 6;
console.log(fact(4)); // 4 * 3 * 2 * 1 = 24;
console.log(fact(5)); // 5 * 4 * 3 * 2 * 1 = 120;
