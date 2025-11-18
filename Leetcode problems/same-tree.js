// 100. Same Tree
// Two binary trees are considered the same
//  if they are structurally identical, and the nodes have the same value.

var isSameTree = function (p, q) {
    if (p === null && q === null) return true;
    if (p === null || q === null) return false;
    if (p.val !== q.val) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

function arrayToTree(arr) {
  if (!arr.length) return null;

  const nodes = arr.map(val => (val === null ? null : { val, left: null, right: null }));

  for (let i = 0, j = 1; j < nodes.length; i++) {
    if (nodes[i] !== null) {
      if (j < nodes.length) nodes[i].left = nodes[j++];
      if (j < nodes.length) nodes[i].right = nodes[j++];
    }
  }

  return nodes[0];
}

const p = [1,2];
const q = [1,null,2];

// Convert them to trees
const tree1 = arrayToTree(p);
const tree2 = arrayToTree(q);

console.log(isSameTree(tree1, tree2)); // Output: false

