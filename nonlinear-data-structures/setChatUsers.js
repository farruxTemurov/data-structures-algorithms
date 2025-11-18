class ChatUsers {
    constructor() {
        this.activeUsers = new Set();
    }

    addUser(userEmail) {
        if (this.activeUsers.has(userEmail)) {
            console.log(`${userEmail} is already in the chat.`);
        } else {
            this.activeUsers.add(userEmail);
            console.log(`${userEmail} has joined the chat.`);
        }
    }

    removeUser(userEmail) {
        if (this.activeUsers.has(userEmail)) {
            this.activeUsers.delete(userEmail);
            console.log(`${userEmail} has left the chat.`);
        } else {
            console.log(`${userEmail} doesn't exist.`);
        }
    }

    displayActiveUsers() {  // Removed userEmail parameter
        if (this.activeUsers.size === 0) { // Fixed null check
            console.log(`No users in the chat.`);
        } else {
            console.log(`Active users:`);
            this.activeUsers.forEach(user => console.log(user));
        }
    }
}

// Example usage:
const chat = new ChatUsers();
chat.addUser("user1@example.com");
chat.addUser("user2@example.com");
chat.addUser("user1@example.com"); // Duplicate check
chat.displayActiveUsers();
chat.removeUser("user1@example.com");
chat.displayActiveUsers();
chat.removeUser("unknown@example.com"); // Non-existent user
