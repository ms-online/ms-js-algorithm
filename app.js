//有重复元素的全排列
function getPermutaions(options, length) {
  console.log('进入函数开始执行');
  console.log(options);
  console.log(length);
  const permutations = [];

  if (length === 1) {
    //[[1],[2],[3]]
    console.log(options.map((option) => [option]));
    return options.map((option) => [option]);
  }
  const partialPermutations = getPermutaions(options, length - 1);
  console.log('递归执行完毕');
  console.log(partialPermutations);
  //for循环进行全排列
  for (const option of options) {
    console.log('进入外层循环');
    console.log(option);
    for (const existingPermutation of partialPermutations) {
      console.log('进入里层循环');
      console.log(existingPermutation);
      permutations.push([option].concat(existingPermutation));
    }
  }
  return permutations; //[[1,1],[1,2],[1,3]]
}

const number = [1, 2, 3];
const resultLength = 3;

console.log(getPermutaions(number, resultLength));
//时间复杂度：O(n^r) => n是数组长度（options），r是要求的组合长度
