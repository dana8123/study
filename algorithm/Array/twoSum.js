/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/*
const twoSum = function (nums, target) {
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) return [i, j];
		}
	}
};
*/

/*
const twoSum = function (nums, target) {
	for (let i = 0; i < nums.length; i++) {
		let first = nums[i];
		let diff = target - first;
		if (nums.slice(i + 1).includes(diff)) return [i, nums.indexOf(diff)];
	}
};
*/
