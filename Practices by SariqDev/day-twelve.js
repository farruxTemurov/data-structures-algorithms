// NP promblem with greedy algorithm solution
// Fractional Knapsack Problem

function fractionalKnapsack(items, capacity) {
    // sort the items by value/weight ratio (descending)
    items.sort((a, b) => (b.value / b.weight) - (a.value / a.weight));

    let totalValue = 0;
    let remainingCapacity = capacity;

    for (let item of items) {
        if (item.weight <= remainingCapacity) {
            //take the whole item
            totalValue += item.value;
            remainingCapacity -= item.weight;
        } else {
            //take the fraction that fits
            totalValue += item.value * (remainingCapacity / item.weight);
            break; //knapsack is full
        }
    }
    return totalValue;
}

const items = [
    { value: 60, weight: 10 }, // gets the whole
    { value: 100, weight: 20 }, // gets the whole
    { value: 120, weight: 30 } // get a fraction -> 2/3
];

const capacity = 50;
console.log(fractionalKnapsack(items, capacity)); // output: 240