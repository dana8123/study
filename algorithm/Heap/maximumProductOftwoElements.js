// https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/

/*
const maxProduct = function (nums) {
	nums.sort((a, b) => b - a);
	let i = nums[0];
	let j = nums[1];
	return (i - 1) * (j - 1);
};
*/

const maxProduct = function (nums) {
	// 주어진 arr를 힙정렬로 재구성하기
	const heapify = function (nums) {
		const length = nums.length;
		if (length <= 1) return 0;
		// 말단의 노드에서부터 위치 찾기
		for (let i = Math.floor(length / 2); i >= 0; i--) {
			max_heapify(nums, i, length);
		}

		function max_heapify(a, i, length) {
			let left = i * 2 + 1;
			let right = i * 2 + 2;
			let parent = i;

			if (left < length && a[left] > a[parent]) {
				parnet = left;
			}
			if (right < length && a[right] > a[parent]) {
				parent = right;
			}

			if (i != parent) {
				swap(a, i, parent);
				max_heapify(a, parent, length);
				//console.log(a);
			}
		}

		function swap(a, i, j) {
			[a[i], a[j]] = [a[j], a[i]];
			console.log(">", a);
		}
		return nums;
	};
	return heapify(nums);
};

console.log(maxProduct([1, 2, 3, 4, 5]));
