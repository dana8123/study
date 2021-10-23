const maxNumberOfBalloons = function (text) {
	let counts = { b: 0, a: 0, l: 0, o: 0, n: 0 };
	for (let i = 0; i < text.length; i++) {
		const c = text[i];
		if (counts[c] !== undefined) {
			counts[c]++;
		}
	}
	counts["l"] = Math.floor(counts["l"] / 2);
	counts["o"] = Math.floor(counts["o"] / 2);
	console.log(counts);
	let minCount = Number.MAX_VALUE;
	for (let c in counts) {
		if (counts[c] < minCount) {
			minCount = counts[c];
		}
	}
	return minCount;
};

console.log(maxNumberOfBalloons("nlaeolko"));
