var findDuplicate = function (nums) {
	nums.sort((a, b) => a - b);
	let startIndex = 0;
	let endIndex = nums.length - 1;
	let count = 0;
	while (startIndex <= endIndex) {
		let middleValue = Math.floor((nums[startIndex] + nums[endIndex]) / 2);
	}
};
