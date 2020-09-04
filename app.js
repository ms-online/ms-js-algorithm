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
const availableCoins = [100, 50, 20, 5, 2, 1];
const targetAmount = 129;

const change = computeChange(availableCoins, targetAmount);
console.log(change);

//时间复杂度 ： O(n)
