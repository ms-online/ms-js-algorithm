let counter = 0; // 计算函数调用次数
function fib(n) {
  counter++;
  // 3
  if (n === 0 || n === 1) {
    // [1,1,2,3,5,8]
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}

// n =3 => 3
// fib(2) + fib(1);
// fib(1) + fib(0) + 1
// 1 + 1 + 1 = 3

// O(2^n) 指数时间复杂度

// console.log(fib(5));
// console.log(fib(36));

fib(5);
console.log(counter);
counter = 0;

fib(10);
console.log(counter);
counter = 0;

fib(20);
console.log(counter);
counter = 0;

fib(30);
console.log(counter);
counter = 0;
