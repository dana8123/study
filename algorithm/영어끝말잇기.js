function solution(n, words) {
	let wlist = [];
	let count = 0;
	for (let i = 0; i <= words.length; i++) {
		let current = words[i];
		if (wlist.length !== 0) {
			if (
				wlist.includes(current) ||
				wlist[wlist.length - 1][wlist.length - 1] === current[0]
			) {
				return [(i % n) + 1, count];
			}
		} else {
			if (i % n == 0) {
				wlist.push(current);
				count += 1;
			}
		}
	}
	return [0, 0];
}

const words = ["abc", "dfdf"];
console.log(words[0][0]);
console.log(words[words.length - 1][words.length - 1]);
console.log(words[0].length - 1);
