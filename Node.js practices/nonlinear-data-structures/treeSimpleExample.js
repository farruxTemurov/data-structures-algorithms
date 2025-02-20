class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    // ✅ Insert in Level Order
    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }

        let queue = [this.root];

        while (queue.length > 0) {
            let current = queue.shift(); // FIFO (first-in, first-out)

            if (!current.left) {
                current.left = newNode;
                return;
            } else {
                queue.push(current.left);
            }

            if (!current.right) {
                current.right = newNode;
                return;
            } else {
                queue.push(current.right);
            }
        }
    }

    // ✅ Delete a node (replace with the deepest node)
    delete(value) {
        if (!this.root) return;

        let queue = [this.root];
        let nodeToDelete = null, lastNode = null, parentOfLastNode = null;

        while (queue.length > 0) {
            lastNode = queue.shift(); // BFS traversal

            if (lastNode.value === value) {
                nodeToDelete = lastNode; // Found node to delete
            }

            if (lastNode.left) {
                parentOfLastNode = lastNode;
                queue.push(lastNode.left);
            }

            if (lastNode.right) {
                parentOfLastNode = lastNode;
                queue.push(lastNode.right);
            }
        }

        if (!nodeToDelete) return; // Node not found

        // Step 2: Replace value of nodeToDelete with lastNode value
        nodeToDelete.value = lastNode.value;

        // Step 3: Delete lastNode
        if (parentOfLastNode.left === lastNode) {
            parentOfLastNode.left = null;
        } else {
            parentOfLastNode.right = null;
        }
    }

    // ✅ Print Tree (for visualization)
    printTree(node, space = 0, levelSpace = 5) {
        if (!node) return;
        space += levelSpace;
        this.printTree(node.right, space);
        console.log(" ".repeat(space - levelSpace) + node.value);
        this.printTree(node.left, space);
    }
}

// ✅ Testing the Solution
const tree = new BinaryTree();
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(40);
tree.insert(50);

console.log("🌳 Initial Tree:");
tree.printTree(tree.root);

tree.delete(20);
console.log("\n🚀 Tree after deleting 20:");
tree.printTree(tree.root);
