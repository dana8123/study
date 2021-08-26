const permutation = (arr, selectNum) => {
	let result = [];
	if (selectNum === 1) return arr.map((value) => [value]);

	arr.forEach((fixed, index, origin) => {
		const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
		const permutations = permutation(rest, selectNum - 1);
		const attached = permutations.map((permutations) => [
			fixed,
			...permutations,
		]);
		result.push(...attached);
	});
	return result;
};

const isPrime = (num) => {
	if (num === 1 || num === 0) return false;
	if (num === 2) return true;
	for (let i = 2; i < num / 2 + 1; i++) {
		if (num % i === 0) return false;
	}
	return true;
};

function solution(numbers) {
	let answer = 0;
	const arr = numbers.split("");
	const set = new Set();

	for (let i = 1; i <= numbers.length; i++) {
		const result = permutation(arr, i).map((res) => +res.join(""));
		result.forEach((res) => {
			if (!set.has(res)) {
				set.add(res);
				answer += isPrime(res) ? 1 : 0;
			}
		});
	}

	return answer;
}

solution("17");
