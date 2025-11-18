class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    };
    // Insert at end
    append(val) {
        const newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;

            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    };
    // Insert at the beginning
    prepend(val) {
        const newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    };
    // Search by value
    find(val) {
        let current = this.head;
        while (current) {
            if (current.val === val) return current;
            current = current.next;
        }
        return null;
    };
    // Print all values
    print(val) {
        let current = this.head;
        const result = [];
        while (current) {
            result.push(current.val);
            current = current.next;
        }
        console.log(result.join(" -> "));
    };
}
module.exports = { LinkedList };