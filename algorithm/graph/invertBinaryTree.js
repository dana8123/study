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
 * @return {TreeNode}
 */

//recursion, dfs
/*
const invertTree = function (root) {
	if (root === null) return root;
	[root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
	return root;
};
*/

//stack, dfs
const invertTree = function (root) {
	let stack = [root];
	let ret = [];
	while (stack.length) {
		const n = stack.pop();
		if (n != null) {
			[n.left, n.right] = [n.right, n.left];
			ret.push(n.left, n.right);
		}
	}
	return ret;
};
