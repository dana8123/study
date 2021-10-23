function TreeNode(val = 0, left = null, right = null) {
	this.val = val;
	this.left = left;
	this.right = right;
}

function dfs(root) {
	let stack = [];
	let ret = [];
	let node = root;
	while (node || stack.length) {
		while (node !== null) {
			stack.push(node);
			node = node.left;
		}
		node = stack.pop();
		ret.push(node.val);
		node = node.right;
	}
	return ret;
}
