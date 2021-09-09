/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const diameterOfBinaryTree = function (root) {
	if (!root) return 0;
	let longest = 0;
	const dfs = function (node) {
		// 왼쪽, 오른쪽의 각 리프노드까지 탐색한다.
		if (!node) return 0;

		let left = dfs(node.left);
		let right = dfs(node.right);

		longest = Math.max(longest, left + right);
		// 상태값 반환
		return Math.max(left, right) + 1;
	};
	dfs(root);
	return longest;
};

/**
 * 왼쪽, 오른쪽의 각 리프노드까지 탐색한다.
 * 가장 긴 경로를 구한다.
 */
