const isPalindrome = function (head) {
	const queue = [];
	if (!head) return true;

	let node = head;

	while (node !== null) {
		queue.push(node.val);
		node = node.next;
	}

	while (queue.length > 1) {
		if (queue.shift() != queue.pop()) return false;
	}

	return true;
};
