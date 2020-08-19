let counter = 0; // 计算函数调用次数
function fib(n, memo) {
  let result; // 存储中间值
  counter++;
  if (memo[n]) return memo[n]; // 验证这个中间值是否存在，若存在就返回结果，不存在就跳过执行下方代码。
  if (n === 0 || n === 1) {
    result = 1;
  } else {
    result = fib(n - 1, memo) + fib(n - 2, memo);
  }
  memo[n] = result;
  return result;
}

// n =3 => 3
// fib(2) + fib(1);
// fib(1) + fib(0) + 1
// 1 + 1 + 1 = 3

// O(2^n) 指数时间复杂度

// console.log(fib(5, {})); // 空对象的原因：在递归的过程中，重复中间值才会被存储在对象里面
// console.log(fib(6, {}));

fib(5, {});
console.log(counter);
counter = 0;

fib(10, {});
console.log(counter);
counter = 0;

fib(20, {});
console.log(counter);
counter = 0;

fib(50, {});
console.log(counter);
counter = 0;
