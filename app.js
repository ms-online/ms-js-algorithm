function computeChange(coins, amount) {
  let remainingAmount = amount;
  const calculatedChange = {
    selectedCoins: {},
    numberOfCoins: 0,
  };
  for (const coin of coins) {
    const count = Math.floor(remainingAmount / coin);
    calculatedChange.selectedCoins[coin] = count;
    calculatedChange.numberOfCoins += count;
    remainingAmount = remainingAmount - coin * count;
  }
  return calculatedChange;
}

function computeChangeBruteForce(coins, amount) {
  const results = [];
  for (let i = 0; i < coins.length; i++) {
    results.push(computeChange(coins.slice(i), amount));
  }

  let smallestAmountCoins = Number.MAX_SAFE_INTEGER;
  let finalResult;
  for (const result of results) {
    if (result.numberOfCoins < smallestAmountCoins) {
      smallestAmountCoins = result.numberOfCoins;
      finalResult = result;
    }
  }
  return finalResult;
}

const availableCoins = [8, 6, 5, 1];
const targetAmount = 63;

const change = computeChangeBruteForce(availableCoins, targetAmount);
console.log(change);

//时间复杂度 （贪婪算法）： O(n)
//时间复杂度 （暴力搜索算法）：O(n*n) + O(n) => O(n^2)
