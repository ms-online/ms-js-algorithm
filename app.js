// 如何返回斐波那契数列中下标为n的元素？

function fib(n) {
  const numbers = [1, 1];
  for (let i = 2; i < n + 1; i++) {
    numbers.push(numbers[i - 2] + numbers[i - 1]);
  }
  console.log(numbers);
  return numbers[n];
}

console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
