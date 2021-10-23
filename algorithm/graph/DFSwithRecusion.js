function TreeNode(val = 0, left = null, right = null) {
	this.val = val;
	this.left = left;
	this.right = right;
}

function dfs(root) {
	if (root === null) return [];
	return [...dfs(root.left), root.val, ...dfs(root.right)];
}
