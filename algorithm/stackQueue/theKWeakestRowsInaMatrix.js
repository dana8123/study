/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
const kWeakestRows = function (mat, k) {
	let power = [];
	let answer = [];
	for (let i = 0; i < mat.length; i++) {
		let count = 0;
		let n = mat[i].length;
		for (let j = 0; j < n; j++) {
			if (mat[i][j] === 1) count++;
		}
		power.push([i, count]);
	}
	power.sort((a, b) => a[1] - b[1]);

	for (let i = 0; i < k; i++) {
		answer.push(power.slice(0, k)[i][0]);
	}

	return answer;
};

console.log(
	kWeakestRows(
		[
			[1, 1, 0, 0, 0],
			[1, 1, 1, 1, 0],
			[1, 0, 0, 0, 0],
			[1, 1, 0, 0, 0],
			[1, 1, 1, 1, 1],
		],
		3
	)
);
