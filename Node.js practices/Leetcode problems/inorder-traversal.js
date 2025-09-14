// 94. Binary Tree Inorder Traversal

// the inorder traversal -> left, root, right;

const inorderTraversal = function (root) {
    let result = [];

    function traverse(node) {
        if (!node) return;

        traverse(node.left);
        result.push(node.val);
        traverse(node.right);
    }

    traverse(root);
    return result;
}