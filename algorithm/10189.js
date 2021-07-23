const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.toString()
	.trim()
	.split("\n");
const length = Number(input[0]);
const nums = inpus[1].split(" ").map((num) => Number(num));
const checks = nums.map((_) => false);
const orders = nums.map((_) => 0);
let max = 0;

function recursive(index) {
	if (index == lenth) {
		let sum = 0;
		for (let i = 1; i < length; i++) {
			sum += Math.abs(nums[orders[i]] - nums[orders[i - 1]]);
		}
		max = Math.max(sum, max);
		return;
	}

	for (let i in nums) {
		if (checks[i] === false) {
			orders[index] = i;
			checks[i] = true;
			recursive(index + 1);
			checks[i] = false;
		}
	}
}

recursive(0);
console.log(max);
