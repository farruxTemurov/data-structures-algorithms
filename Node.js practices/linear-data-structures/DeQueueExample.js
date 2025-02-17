class DeQueue {
    constructor() {
        this.items = [];  // Internal array to store elements
    }

    enqueueFront(value) {
        this.items.unshift(value);  // Add to the front
    }

    enqueueRear(value) {
        this.items.push(value);  // Add to the rear
    }

    dequeueFront() {
        if (this.isEmpty()) {
            return "DeQueue is empty";
        }
        return this.items.shift();  // Remove from the front
    }

    dequeueRear() {
        if (this.isEmpty()) {
            return "DeQueue is empty";
        }
        return this.items.pop();  // Remove from the rear
    }

    peekFront() {
        return this.isEmpty() ? "DeQueue is empty" : this.items[0];
    }

    peekRear() {
        return this.isEmpty() ? "DeQueue is empty" : this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

// Example usage:
const dq = new DeQueue();
dq.enqueueFront(10);
dq.enqueueRear(20);
dq.enqueueFront(5);
console.log(dq.peekFront());  // Output: 5
console.log(dq.peekRear());   // Output: 20
console.log(dq.dequeueFront());  // Output: 5
console.log(dq.dequeueRear());   // Output: 20
console.log(dq.size());  // Output: 1
