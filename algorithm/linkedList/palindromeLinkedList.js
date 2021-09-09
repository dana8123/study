/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
/*
const isPalindrome = function (head) {
	const q = new Array();

	const node = head;
	// array 만들기
	while (head) {
		q.push(head.val);
		head = head.next;
	}
	console.log(q);

	while (q.length > 1) {
		if (q.pop() != q.shift()) {
			return false;
		}
	}

	return true;
};

*/
const isPalindrome = function (head) {
	let rev, slow;
	[rev, rev.next, slow] = [null, null, head];
	fast = head;

	while (fast && fast.next) {
		fast = fast.next.next;
		[rev, rev.next, slow] = [slow, rev, rev.next];
	}

	if (fast) {
		slow = slow.next;
	}

	while (rev && rev.val === slow.val) {
		slow, (rev = slow.next), rev.next;
	}
};

//console.log(isPalindrome([1, 2]));
