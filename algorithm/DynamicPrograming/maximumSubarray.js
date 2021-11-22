/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
	let sum = [];
	sum[0] = nums[0];
	for (let i = 0; i < nums.length - 1; i++) {
		if (sum[i] < 0) {
			sum.push(nums[i + 1]);
		} else {
			sum.push(nums[i + 1] + sum[i]);
		}
	}
	return Math.max(...sum);
};
/**
 * 계속해서 누적 값을 더하면서
 * (누적값) + (새로운값) 의 결과가 음수가 된다면, 굳이 결과값을 subArray에 넣을 필요가 없어진다.
 * 따라서 새로운 값에서부터 다시 누적값을 계산한다.
 * 최종적으로 sum 배열에서의 최대값이 연속적인 값의 합 중 가장 큰 값이 된다.
 */+
