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
}