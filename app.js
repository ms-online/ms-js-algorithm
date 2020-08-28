//传入的集合个数大于2的情况，如何实现笛卡尔乘积算法？
//
function cartProduct(setA, setB) {
  const product = [];

  for (let setAEl of setA) {
    if (!Array.isArray(setAEl)) {
      setAEl = [setAEl];
    }
    for (const setBEl of setB) {
      console.log(123);
      product.push([...setAEl, setBEl]); //[['green','M],'T-shirt'] 展开运算符合并数组
    }
  }
  return product;
}

//不限制传入的参数（集合）个数
//剩余参数允许我们将一个不定数量的参数表示为一个数组
function cartesians(...sets) {
  let tempProuct = sets[0];
  // console.log(sets);
  //遍历数组里面的每一个参数，每次使用2个参数调用cartProduct函数，返回一个临时的product

  for (let i = 1; i < sets.length; i++) {
    tempProuct = cartProduct(tempProuct, sets[i]);
  }
  return tempProuct;
}

const colors = ['green', 'red', 'blue'];
const sizes = ['M', 'L'];
const styles = ['T-shirt', 'coat'];

// console.log(cartProduct(colors, sizes));
console.log(cartesians(colors, sizes, styles));

// n 第一个数组的长度，m第二个数组的长度
//时间复杂度 ：O(n*m)  //最差情况：以最长数组的长度来统一全部数组的长度：O(n*n) => O(n^2)
//空间复杂度 ：O(n*m)  //最差情况：以最长数组的长度来统一全部数组的长度：O(n*n) => O(n^2)

//不限制传入参数的情况
//时间复杂度：O(n*n)=>O(n^2), O(n*n*n)=>O(n^3) ===> O(n^x) // x代表参数的个数
//空间复杂度：O(n*n)=>O(n^2), O(n*n*n)=>O(n^3) ===> O(n^x) // x代表参数的个数

// const arr = [1, 2, 3];
// const newArr = [...arr, 4];
// console.log(newArr);
