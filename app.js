function findElement(sortedArr, element) {
  let startIndex = 0;
  let endIndex = sortedArr.length - 1;

  while (startIndex <= endIndex) {
    console.log('123');
    //中间元素的下标
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2); // 5 - 0 = 5 / 2= 2.5 = 2

    // 判断中间元素和查找元素是否相等
    if (element === sortedArr[middleIndex]) {
      return middleIndex;
    }
    //比较中间元素和查找元素的大小
    if (sortedArr[middleIndex] < element) {
      startIndex = middleIndex + 1; //重置数组起点下标
    } else {
      endIndex = middleIndex - 1; //重置数组的终点下标
    }
  }
}

const arr = [1, 5, 9, 13, 99, 100];
console.log(findElement(arr, 99));

//空间复杂度：O(1)
