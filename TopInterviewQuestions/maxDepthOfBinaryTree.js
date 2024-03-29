// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

//Example 1
// Input: root = [3,9,20,null,null,15,7]
// Output: 3

//Example 2
// Input: root = [1, null, 2];
// Output: 2;

//Example 3
// Input: root = [];
// Output: 0;

// Example 4
// Input: root = [0]
// Output: 1

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var maxDepth = function (root) {
  if (!root) return 0;
  //   if (root.length === 1) return 1;
  let leftSide = maxDepth(root.left);
  let rightSide = maxDepth(root.right);
  let child = leftSide > rightSide ? leftSide : rightSide;
  return child + 1;
};

console.log(maxDepth([3, 9, 20, null, null, 15, 7])); //3
console.log(maxDepth([1, null, 2])); //2
console.log(maxDepth([])); //0
console.log(maxDepth([0])); //1
