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

    updateUserOperations(user, operation) {  // `operation` is a single string, not an array
        if (this.map.has(user)) {
            let existingRoles = this.map.get(user); // Get current operations array

            if (!existingRoles.includes(operation)) {
                existingRoles.push(operation);  // Add new operation
                this.map.set(user, existingRoles); // Update the Map with new array
                return `New operation "${operation}" added for ${user}`;
            } else {
                return `The operation "${operation}" already exists for ${user}`;
            }
        } else {
            return "User not found!";
        }
    }
}

// Creating an instance
const userOps = new UserOperations();

// Adding users with operations
userOps.addUser("Alice", ["Create", "Read", "Update"]);
userOps.addUser("Bob", ["Read", "Delete"]);

// Updating user operations
console.log(userOps.updateUserOperations("Alice", "Delete")); // ✅ Adds "Delete"
console.log(userOps.updateUserOperations("Alice", "Create")); // ❌ Already exists

// Checking updated operations
console.log(userOps.getUserOperations("Alice")); // ["Create", "Read", "Update", "Delete"]
