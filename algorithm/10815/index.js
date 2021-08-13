const sangunNums = [6, 3, 2, 10, -10];
const M = 8;
const givenNums = [10, 9, -5, 2, 3, 4, 5, -10];
const answer = [];

givenNums.sort((a, b) => a - b);

let low = 0;
let high = M;
let middle = Math.floor((low + high) / 2);
while (high > 0 && low < M) {
	let given = givenNums[middle];
	let sangun = sangunNums[i];
	if (given > sangun) {
		high = middle - 1;
		let middle = Math.floor((low + high) / 2);
	} else if (given < sangun) {
		low = middle + 1;
		middle = Math.floor((low + high) / 2);
	} else if (given === sangun) {
		return answer.push(1);
	}
}
answer.push(0);
low = 0;
high = M;

console.log(answer);
