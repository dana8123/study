/*

function solution(participant, completion) {
	const HashTable = {};
  let key;

	for (key of participant) {
		//console.log(key);
		HashTable[key] = 1;
	}

	for (key of completion) {
		delete HashTable[key];
	}

	for (key in HashTable) {
		console.log("==>", key);
		return key;
	}
}

문제점 : 중복된 데이터에 대해 고려하지 않았음.

*/

function solution(participant, completion) {
	const HashTable = {};
	let key;

	for (key of participant) {
		if (!HashTable[key]) {
			HashTable[key] = 1;
		} else {
			HashTable[key] = HashTable[key] + 1;
		}
	}

	for (key of completion) {
		HashTable[key] = HashTable[key] - 1;
		console.log(HashTable);
	}

	for (key in HashTable) {
		if (HashTable[key]) {
			return key;
		}
	}
}

solution(
	["marina", "josipa", "nikola", "vinko", "filipa"],
	["josipa", "filipa", "marina", "nikola"]
);

//solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]);

/*
처음 풀었을 때는 중복된 데이터에 관해 고려하지 않아서 테스트케이스를 통과하지 못했고,
두번째 풀었을 때에는 마지막에 값을 리턴해 주는 기준에 대해서 고려하지 않았기 때문에 통과하지 못했다.
*/
