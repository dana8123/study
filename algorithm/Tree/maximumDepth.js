/*
 * 문제  : https://leetcode.com/problems/maximum-depth-of-binary-tree/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const maxDepth = function (root) {
	if (!root) return 0;
	const queue = [root];
	let depth = 0;
	while (queue.length !== 0) {
		depth++;
		let currentQueue = queue.pop();
		const len = currentQueue.length;
		for (let i = 0; i < len; i++) {
			if (currentQueue[i].left) queue.push(currentQueue[i].left);
			if (currentQueue[i].right) queue.push(currentQueue[i].right);
		}
	}
	return depth;
};
