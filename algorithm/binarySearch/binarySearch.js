/*
var arr = [];
for (let i = 1; i <= 240000; i++) {
	arr.push(i);
}

function binarySearch(target, dataArray) {
	let low = 0;
	let high = dataArray.length - 1;

	let index = 0;

	while (low <= high) {
		let mid = Math.floor((high + low) / 2);
		let guess = dataArray[mid];
		if (guess === target) {
			return guess;
		} else if (guess > target) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}

		index++;
		console.log(
			`${index}. low: ${low}, mid: ${mid}, high: ${high}, data: ${dataArray[mid]}`
		);
	}

	return undefined;
}

var result = binarySearch(1200, arr);
console.log(result);
*/

const input = [];
let numList = undefined;

const strToNumArr = (str) => str.split(" ").map((numChar) => Number(numChar));

const binarySearch = (num, startIndex, endIndex) => {
	if (endIndex < startIndex) return false;
	if (endIndex === startIndex) return num === numList[startIndex];

	const pivotIndex = Math.floor((endIndex + startIndex) / 2);
	if (num === numList[pivotIndex]) return true;
	else if (num > numList[pivotIndex])
		return binarySearch(num, pivotIndex + 1, endIndex);
	else if (num < numList[pivotIndex])
		return binarySearch(num, startIndex, pivotIndex - 1);
};

//입력 받기
require("readline")
	.createInterface(process.stdin, process.stdout)
	.on("line", function (line) {
		input.push(line.trim());
	})
	.on("close", function () {
		const numListFinalIndex = Number(input[0]) - 1; //상근이가 가지고 있는 숫자 카드들을 담는 배열의 가장 마지막 인덱스를 저장
		numList = strToNumArr(input[1]).sort((a, b) => a - b); //상근이가 가지고 있는 숫자 카드들을 오름차순으로 정렬
		const searchNumList = strToNumArr(input[3]); //검사해야 하는 숫자카드들
		//결과 문자열 연산
		const result = searchNumList.reduce(
			(acc, curr) =>
				(acc += `${binarySearch(curr, 0, numListFinalIndex) ? 1 : 0} `),
			""
		);
		console.log(result);
	});
