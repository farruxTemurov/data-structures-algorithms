function createUser(name, email) {
    return {
        name,
        email,
        role: "user",
        greet() {
            return `Hello, my name is ${this.name} and my email is ${this.email}.`;
        }
    };
}

const user1 = createUser("Farrukh", "farrukh@example.com");
console.log(user1.greet());

