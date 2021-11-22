/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
	let best_sum = Number.MIN_VALUE;
	let current_sum = 0;

	for (let num of nums) {
		current_sum = Math.max(num, num + current_sum);
		best_sum = Math.max(current_sum, best_sum);
	}

	return best_sum;
};
