function sort(arr) {
  console.log('开始执行函数');
  console.log(arr);
  //base case
  //验证分割数组长度小于2的时候
  if (arr.length < 2) {
    return arr;
  }
  //验证分割数组长度等于2的时候，进行排序
  if (arr.length === 2) {
    console.log('刚好只有2个元素');
    console.log(arr[0] > arr[1] ? [arr[1], arr[0]] : arr);
    return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
  }

  //对数组进行分割
  const middle = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, middle);
  const rightArray = arr.slice(middle);

  //递归步骤
  const leftSortedArray = sort(leftArray);
  const rightSortedArray = sort(rightArray);

  //实现归并和排序
  let mergedArr = [];
  let leftArrIndex = 0;
  let rightArrIndex = 0;

  //两个下标值同时大于等于两个数组的长度时候跳出循环
  while (
    leftArrIndex < leftSortedArray.length ||
    rightArrIndex < rightSortedArray.length
  ) {
    //比较数组的元素大小
    if (
      leftArrIndex >= leftSortedArray.length ||
      leftSortedArray[leftArrIndex] > rightSortedArray[rightArrIndex]
    ) {
      mergedArr.push(rightSortedArray[rightArrIndex]);
      rightArrIndex++;
    } else {
      mergedArr.push(leftSortedArray[leftArrIndex]);
      leftArrIndex++;
    }
  }
  console.log('归并步骤执行完毕');
  console.log(mergedArr);

  return mergedArr;
}

// const sortedArray = sort([43, -12, 5, 12, 8, 2, -20, 100]);
const sortedArray = sort([43, -12, 60, -30, 100]);
console.log(sortedArray);

// a = 2, b= 2;
//递归步骤的时间复杂度：O(n^logb(a)) => O(n^log2(2)) => O(n^1) => O(n);
//递归外的时间复杂度：O(n);
//整个函数的时间复杂度：O(n^logb(a) * logn) => O(n^logb(a) * logn) => O(n^1 * logn) => O(n * logn)
//线性对数 VS 平方
// n = 3
// 平方：3^2 = 9
// 3*log3 = 3*1.5 = 4.5

//空间复杂度:O(n)
