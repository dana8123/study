/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
	let answer = [];
	nums.sort((a, b) => a - b);

	for (let i = 0; i < nums.length; i++) {
		if (i < 0 && nums[i] === nums[i - 1]) continue;

		// 투포인터를 이용한 계산
		let left = i + 1;
		let right = nums.length - 1;
		while (left < right) {
			let sum = nums[i] + nums[left] + nums[right];
			if (sum < 0) left++;
			else if (sum > 0) --right;
			else answer.push([nums[i], nums[left], nums[right]]);

			while (left < right && nums[left] === nums[left + 1]) left++;
			while (left < right && nums[right] === nums[right - 1]) --right;

			left++;
			--right;
		}
	}
	return answer;
};

console.log(threeSum([0, 0, 0, 0]));
