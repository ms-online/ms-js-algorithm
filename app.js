// 找到数组里面的最小值

function getMin(numbers) {
  let currentMin = numbers[0]; //初始化数组第一项为当前的最小值  1
  for (const number of numbers) {
    // 1
    if (number < currentMin) {
      // n
      currentMin = number; // 0(最好) 2(最差) 1(平均情况)
    }
  }
  return currentMin; //1
}

// 最好情况： [1, 2, 3] => O(n)
// 平均情况： [2, 1, 3] => O(n)
// 最差情况： [3, 2, 1] => O(n)

console.log(getMin([1, 2, 3]));
console.log(getMin([4, 5, 7, 8, 0]));
console.log(getMin([10, 6, 2, 5, 7]));

// 判断奇偶

function isEven(number) {
  return number % 2 === 0; // 4 % 2 = 0; 5 % 2 = 1;
}

// 一种情况：O(1)

console.log(isEven(2));
console.log(isEven(3));
console.log(isEven(4));
