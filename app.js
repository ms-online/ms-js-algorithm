function knapsack(items, cap, itemIndex) {
  //跳出递归
  if (cap === 0 || itemIndex < 0) {
    return { items: [], value: 0, weight: 0 };
  }
  //物品是否大于背包最大承载量
  if (cap < items[itemIndex].weight) {
    return knapsack(items, cap, itemIndex - 1);
  }

  //放入物品
  const sackWithItem = knapsack(
    items,
    cap - items[itemIndex].weight,
    itemIndex - 1
  );
  //不放入物品
  const sackWithoutItem = knapsack(items, cap, itemIndex - 1);
  //获取价值
  const valueWithItem = sackWithItem.value + items[itemIndex].value;
  const valueWithoutItem = sackWithoutItem.value;

  //价值比较
  if (valueWithItem > valueWithoutItem) {
    const updateSack = {
      items: sackWithItem.items.concat(items[itemIndex]),
      value: sackWithItem.value + items[itemIndex].value,
      weight: sackWithItem.weight + items[itemIndex].weight,
    };

    return updateSack;
  } else {
    return sackWithoutItem;
  }
}
const items = [
  { name: 'a', value: 5, weight: 4 },
  { name: 'b', value: 8, weight: 10 },
  { name: 'c', value: 6, weight: 3 },
];

const maxCap = 10;

const sack = knapsack(items, maxCap, items.length - 1);
console.log(sack);
