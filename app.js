//无重复元素的全排列

function getPermutations(options) {
  const permutations = [];
  console.log('进入函数开始执行');
  console.log(options);
  if (options.length === 1) {
    return [options];
  }

  //递归步骤
  const partialPermutations = getPermutations(options.slice(1)); //[['4']]
  console.log('递归步骤执行完毕');
  console.log(partialPermutations);
  const firstOption = options[0]; //3
  console.log('数组第一项');
  console.log(firstOption);

  //使用for循环进行排列
  for (let i = 0; i < partialPermutations.length; i++) {
    //得到每一项排列数组
    const partialPermutation = partialPermutations[i];
    console.log('进入外层循环');
    console.log(partialPermutation);
    for (let j = 0; j <= partialPermutation.length; j++) {
      ///得到每一项排列数组里面的元素
      const permutationInfront = partialPermutation.slice(0, j); //[] [3] [3,4]
      const permutationAfter = partialPermutation.slice(j); //[3,4] [4] []
      permutations.push(
        permutationInfront.concat([firstOption], permutationAfter) // [2,3,4] [3,4,2] [3,4,2]
      );
    }
  }
  return permutations;
}

const items = ['1', '2', '3', '4'];
console.log(getPermutations(items));

//时间复杂度：O(n!) 4*3**2*1 = 24; 5*4*3*2*1 = 120; 6! = 720;
