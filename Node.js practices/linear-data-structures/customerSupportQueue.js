class CustomerSupportQueue {

    constructor() {
        this.queue = [];
    }

    enqueue(customerRequest) {
        this.queue.push(customerRequest);  // Adds to the end
        console.log("Customer Request Added");
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        let request = this.queue.shift();  // Removes from the front
        console.log("Customer Request Processed " + request);
    }

    peek() {
        return this.isEmpty() ? "Queue is empty" : this.queue[0];  // Front element
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    size() {
        return this.queue.length;
    }

}
let customerSupportQueue = new CustomerSupportQueue();
console.log("Any request present in queue? " + (customerSupportQueue.isEmpty() ? "No request yet in queue" : "Yes"))
console.log("Number of customer requests in the queue: " + customerSupportQueue.size())
customerSupportQueue.enqueue("Customer 1 needs help with Account Password reset");
customerSupportQueue.enqueue("Customer 2 needs help check order status");
customerSupportQueue.enqueue("Customer 3 needs help with refund amount");
customerSupportQueue.enqueue("Customer 4 needs help with create the account");
console.log("Number of customer requests in the queue: " + customerSupportQueue.size())
console.log("Any request present in queue " + (customerSupportQueue.isEmpty() ? "No request yet in queue" : "Yes, there are totally " + customerSupportQueue.size() + " requests"))
console.log("First request in queue is " + customerSupportQueue.peek())
customerSupportQueue.dequeue();