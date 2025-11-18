// 94. Binary Tree Inorder Traversal
// inorder: left -> root -> right

// TreeNode class to create nodes
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const inorderTraversal = function (root) {
    let result = [];

    function traverse(node) {
        if (!node) return;

        traverse(node.left);       // go left
        result.push(node.val);     // visit root
        traverse(node.right);      // go right
    }

    traverse(root);
    return result;
};

const root = new TreeNode(
    1,
    null,
    new TreeNode(
        2,
        new TreeNode(3),
        null
    )
);

console.log(inorderTraversal(root)); // Output: [1, 3, 2]
