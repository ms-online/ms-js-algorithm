// 递归二分查找
function findElement(sortedArr, element, offset) {
  console.log(sortedArr);
  let startIndex = 0;
  let endIndex = sortedArr.length - 1;
  //中间元素的下标
  const middleIndex = Math.floor((endIndex - startIndex) / 2); // 5 - 0 = 5 / 2= 2.5 = 2

  // 判断中间元素和查找元素是否相等 base case
  if (element === sortedArr[middleIndex]) {
    return middleIndex + offset;
  }
  //比较中间元素和查找元素的大小
  if (sortedArr[middleIndex] < element) {
    startIndex = middleIndex + 1; //重置数组起点下标
    offset = middleIndex + 1; //记忆原始数组下标
  } else {
    endIndex = middleIndex - 1; //重置数组的终点下标
  }
  return findElement(
    sortedArr.slice(startIndex, endIndex + 1),
    element,
    offset
  );
}
//递归运行时间： O(n^logb a)
// a = 1;
// b = 2;
// O(n^log2 1) =>log2 1 = 0; 2^0 = 1 => log2 1 = 0; 2^3 = 8 => log2 8 = 3
// O(n^0) => O(1);

//递归以外的运行时间：O(fn) => O(1);

//整个函数的时间复杂度O(n^logb a * log n)
// O(n^log2 1 * logn) => O(n^0 *logn) => O(1 * logn) => O(logn) //对数时间复杂度

const arr = [1, 5, 9, 13, 99, 100];
console.log(findElement(arr, 99, 0));
