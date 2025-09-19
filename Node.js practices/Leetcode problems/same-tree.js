// 100. Same Tree
// Two binary trees are considered the same
//  if they are structurally identical, and the nodes have the same value.

const isSameTree = function (p, q) {
    if (p === null && q === null) return true;
    if (p === null || q === null) return false;
    if (p.val !== q.val) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
