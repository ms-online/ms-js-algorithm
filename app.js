function sort(arr) {
  //复制数组
  const copyArr = [...arr];
  console.log('开始执行函数');
  console.log(arr);

  // base case 当分割数组只有一项的时候返回这个数组，跳出递归
  if (copyArr.length <= 1) {
    console.log('当数组只有一项，直接返回这个数组');
    return copyArr;
  }

  //初始化不同类型的数组容器
  const smallerElementsArr = []; //存放比分界值小的元素
  const biggerElementsArr = []; //存放比分界值大的元素
  const pivotElement = copyArr.shift(); // 找到每个数组的分界值
  const centerElementsArr = [pivotElement]; //存放分界值

  //递归步骤
  while (copyArr.length) {
    const currentElement = copyArr.shift(); //获取当前元素

    //和分界值对比
    if (currentElement === pivotElement) {
      centerElementsArr.push(currentElement);
    } else if (currentElement < pivotElement) {
      smallerElementsArr.push(currentElement);
    } else {
      biggerElementsArr.push(currentElement);
    }
  }

  console.log('while循环执行完之后');
  console.log(smallerElementsArr);
  console.log(centerElementsArr);
  console.log(biggerElementsArr);

  //已经被排序好的数组
  const smallerElementsSortedArr = sort(smallerElementsArr);
  const biggerElementsSortedArr = sort(biggerElementsArr);

  return smallerElementsSortedArr.concat(
    centerElementsArr,
    biggerElementsSortedArr
  );
}

//最差情况
//已经排序数组 => O(n^2) 平方时间复杂度
// [1,2,3]
// small []
// center [1]
// big [2,3]
// small []
// center [2]
// big [3]

//最好情况
// 元素是无序排列的
// a = 2(子问题数量); b= 2（拆分的值）;log2(2)=1;
// 递归步骤运行时间：O(n^logb(a)) => O(n^log2(2)) => O(n^1) => O(n) 线性时间复杂度
// 递归外的运行时间：O(n);
// 整个算法的运行时间：O(n^logb(a) * logn) => O(n^log2(2) * logn) => O(n^1 * logn) => O(n* logn) 线性对数时间复杂度

// const sortedArray = sort([-2, 9, 3, 41, -2, -6, 35, 18]);
const sortedArray = sort([-2, 9, -3, 41, -7]);
console.log(sortedArray);
