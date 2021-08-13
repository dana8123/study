/*function solution(clothes) {
	let key;
	const hashTable = {};
	for (let i = 0; i < clothes.length; i++) {
		key = clothes[i][1];
		if (!hashTable[key]) {
			hashTable[key] = 1;
		} else {
			hashTable[key] = hashTable[key] + 1;
		}
	}

	let result = 1;
	for (key in hashTable) {
		console.log(hashTable[keys]);
		result = (hashTable[key] + 1) * result;
		return result;
	}
}*/

function solution(clothes) {
	let key;
	const hashTable = {};
	for (let i = 0; i < clothes.length; i++) {
		key = clothes[i][1];
		if (!hashTable[key]) {
			hashTable[key] = 1;
		} else {
			hashTable[key] = hashTable[key] + 1;
		}
	}

	let result = 1;

	for (key in hashTable) {
		console.log(hashTable[key]);
		result = (hashTable[key] + 1) * result;
	}
	return result;
}

solution([
	["yellowhat", "headgear"],
	["bluesunglasses", "eyewear"],
	["green_turban", "headgear"],
]);
