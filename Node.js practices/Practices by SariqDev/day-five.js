// Stack and recursion
// Works as LIFO -> Last In First Out

class Stack {
    constructor() {
        this.stack = [];
    }
    // check if the stack is empty
    isEmpty() {
        return this.stack.length === 0;
    }
    // add element to the end
    push(data) {
        this.stack.push(data);
        return true;
    }
    // remove element from the end
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        } else {
            return this.stack.pop();
        }
    }
    // see the last element at the end without removing it
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        } else {
            return this.stack[this.stack.length - 1];
        }
    }
};


