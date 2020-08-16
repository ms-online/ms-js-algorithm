// 判断一个输入数字是否为质数?

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    // 1
    console.log('123'); // n
    if (number % i === 0) {
      // n
      return false; // 1
    }
  }
  return true; // 1
}

// 最好情况： number = 1 或者 number 2 => T = 1 + 1  = 2 => O(1) 常数时间复杂度
// 平均情况： O(n) 线性时间复杂度
// 最差情况： number = 27277 => T = n => O(n) 线性时间复杂度

// console.log(isPrime(1));
// console.log(isPrime(2));
console.log(isPrime(27277));
// console.log(isPrime(9));
