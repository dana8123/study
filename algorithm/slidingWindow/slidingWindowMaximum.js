/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = function (nums, k) {
	let answer = [];
	for (let i = 0; i < nums.length - k + 1; i++) {
		answer.push(Math.max(...nums.slice(i, i + k)));
	}
	return answer;
};
