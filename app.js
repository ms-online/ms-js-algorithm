function cartProduct(setA, setB) {
  const product = [];

  for (const setAEl of setA) {
    for (const setBEl of setB) {
      console.log(123);
      product.push([setAEl, setBEl]);
    }
  }
  return product;
}

const colors = ['green', 'red', 'blue'];
const sizes = ['M', 'L'];

console.log(cartProduct(colors, sizes));

// n 第一个数组的长度，m第二个数组的长度
//时间复杂度 ：O(n*m)  //最差情况：以最长数组的长度来统一两个数组的长度：O(n*n) => O(n^2)
//空间复杂度 ：O(n*m)  //最差情况：以最长数组的长度来统一两个数组的长度：O(n*n) => O(n^2)
