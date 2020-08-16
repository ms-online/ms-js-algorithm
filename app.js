// 如何返回斐波那契数列中下标为n的元素？

function fib(n) {
  const numbers = [1, 1]; // 1
  for (let i = 2; i < n + 1; i++) {
    // 1
    console.log('123'); // n -1
    counts++;
    numbers.push(numbers[i - 2] + numbers[i - 1]); // n -1
  }
  // console.log(numbers);
  return numbers[n]; //1
}

// T = 1 + 1 + 2*(n - 1) + 1 = 1 + 2*n
// T = 2*n
// T = n => O(n) => 线性时间复杂度

console.log(fib(4));
