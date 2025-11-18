const { LinkedList } = require("./linkedList-functions");

function runTests() {
    const list = new LinkedList();

    console.log("=== Test 1: Append ===");
    list.append(10);
    list.append(20);
    list.append(30);
    list.print(); // Expected: 10 -> 20 -> 30

    console.log("\n=== Test 2: Prepend ===");
    list.prepend(5);
    list.print(); // Expected: 5 -> 10 -> 20 -> 30

    console.log("\n=== Test 3: Find ===");
    console.log(list.find(20)); // Expected: Node { val: 20, next: Node { val: 30, next: null } }
    console.log(list.find(99)); // Expected: null

    console.log("\n=== Test 4: Mixed Operations ===");
    const newList = new LinkedList();
    newList.prepend(1); // [1]
    newList.append(2);  // [1 -> 2]
    newList.append(3);  // [1 -> 2 -> 3]
    newList.prepend(0); // [0 -> 1 -> 2 -> 3]
    newList.print();    // Expected: 0 -> 1 -> 2 -> 3
}

runTests();