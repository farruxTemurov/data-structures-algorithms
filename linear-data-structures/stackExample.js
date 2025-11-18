class Stack {
    constructor() {
        this.items = [];  // Internal array to store stack elements
    }

    push(value) {
        this.items.push(value);
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }

    peek() {
        return this.isEmpty() ? "Stack is empty" : this.items[this.items.length - 1]; // Gets the index of the last element (since arrays are zero-indexed).
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

// Example usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek());  // Output: 30
console.log(stack.pop());   // Output: 30
console.log(stack.size());  // Output: 2
