function findElement(arr, element, comparatorFn) {
  let index = 0;
  for (const item of arr) {
    // 判断是否为对象
    if (
      typeof element === 'object' &&
      element !== null &&
      comparatorFn(element, item)
    ) {
      return index;
    }
    // 数字或者字符串
    if (item === element) {
      return index;
    }
    index++;
  }
}

const arr = [4, 9, -3, 0, 12, 5, 33];
// const person = { name: 'Henry', age: 32 };

const objects = [
  { name: 'Summer', age: 26 },
  { name: 'Henry', age: 32 },
];
// console.log(findElement(arr, 12));
console.log(
  findElement(objects, { name: 'Henry', age: 32 }, function (element, item) {
    return element.name === item.name;
  })
);

//空间复杂度：O(1)常数空间复杂度
