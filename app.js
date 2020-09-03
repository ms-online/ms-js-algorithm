function knapsack(elements, capacity) {
  const sack = { items: [], value: 0, weight: 0 };
  let remainingCapacity = capacity;

  for (const element of elements) {
    if (element.weight <= remainingCapacity) {
      sack.items.push(element);
      sack.value += element.value;
      sack.weight += element.weight;
      remainingCapacity -= element.weight;
    }
  }
  return sack;
}
const items = [
  { name: 'a', value: 5, weight: 4 },
  { name: 'b', value: 8, weight: 8 },
  { name: 'c', value: 6, weight: 3 },
];

const maxCap = 8;

const sack = knapsack(items, maxCap);
console.log(sack);
