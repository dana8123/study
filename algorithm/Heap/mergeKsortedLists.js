const mergeLists = function (lists) {
	if (lists.length === 0) return null;
	return lists.reduce(mergeTwoLists);
};

function mergeTwoLists(a, b) {
	let c = new ListNode();
	let current = c;

	while (a && b) {
		if (a.val < b.val) {
			current.next = a;
			a = a.next;
		} else {
			current.next = b;
			b = b.next;
		}
		current = current.next;
	}
	current.next = a || b;
	return c.next;
}

mergeLists([
	[1, 4, 5],
	[1, 3, 4],
	[2, 6],
]);
