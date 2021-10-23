/**
 * @param {number[]} nums
 * @return {number}
 */
const subsetXORSum = function (nums) {
	return helper(nums, 0, 0);
};

const helper = function (nums, index, currentXor) {
	if (index === nums.length) return currentXor;

	let withElement = helper(nums, index + 1, currentXor ^ nums[index]);
	let withoutElement = helper(nums, index + 1, currentXor);

	return withElement + withoutElement;
};

subsetXORSum([5, 1, 6]);
