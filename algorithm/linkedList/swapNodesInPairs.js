/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = function (head) {
	let dummyList = new ListNode(null, head);

	let current = dummyList;

	while (current.next && current.next.next) {
		const a = current.next;
		const b = current.next.next;

		//swap
		a.next = b.next;
		b.next = a;
		current.next = b;

		current = current.next.next;
	}
	return dummyList.next;
};
