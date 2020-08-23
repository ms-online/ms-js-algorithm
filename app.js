function sort(arr) {
  const resultArray = [...arr]; //es6

  //外层循环
  for (let outer = 0; outer < resultArray.length; outer++) {
    console.log('进入外层循环');
    let outerEl = resultArray[outer];
    //里层循环
    for (let inner = outer + 1; inner < resultArray.length; inner++) {
      let innerEl = resultArray[inner];
      console.log('进入里层循环');
      console.log('outerEl:' + outerEl);
      console.log('innerEl:' + innerEl);

      // 对比
      if (outerEl > innerEl) {
        //交换位置
        resultArray[outer] = innerEl;
        resultArray[inner] = outerEl;

        outerEl = resultArray[outer];
        innerEl = resultArray[inner];
        console.log('进入if条件');
        console.log(resultArray);
      }
      console.log('里层循环结束');
      console.log(resultArray);
    }
  }
  return resultArray;
}

// const sortedArr = [4, 12, -3, -8, 1, 72, 36];
const sortedArr = [4, 12, -3, 0];
console.log(sort(sortedArr));

//空间复杂度：O(1);
