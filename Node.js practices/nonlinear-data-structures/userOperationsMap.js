class UserOperations {
    constructor() {
        this.map = new Map();
    }

    addUser(user, operations) {
        this.map.set(user, operations);
        console.log(`${user} has been added with operations:`, operations);
    }

    getUserOperations(user) {
        if (this.map.has(user)) {
            return this.map.get(user);
        } else {
            return `No operations found for ${user}`;
        }
    }
}

// Creating an instance
const userOps = new UserOperations();

// Adding users with operations
userOps.addUser("Alice", ["Create", "Read", "Update"]);
userOps.addUser("Bob", ["Read", "Delete"]);

// Getting user operations
console.log(userOps.getUserOperations("Alice")); // ["Create", "Read", "Update"]
console.log(userOps.getUserOperations("Bob"));   // ["Read", "Delete"]
console.log(userOps.getUserOperations("Eve"));   // No operations found for Eve
