// NP promblem with greedy algorithm solution
// Fractional Knapsack Problem

function fractionalKnapsack(items, capacity) {
    items.sort((a, b) => (b.value / b.weight) - (a.value / a.weight));

    let totalValue = 0;
    let remainingCapacity = capacity;

    for (let item of items) {
        if (item.weight <= remainingCapacity) {
            totalValue += item.value;
            remainingCapacity -= item.weight;
        } else {
            totalValue += item.value * (remainingCapacity / item.weight);
            break;
        }
    }
    return totalValue;
}

const items = [
    { value: 60, weight: 10 },
    { value: 100, weight: 20 },
    { value: 120, weight: 30 }
];

const capacity = 50;
console.log(fractionalKnapsack(items, capacity));