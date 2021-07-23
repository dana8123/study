/*let cNum = [6, 3, 2, 10, -10];
const numbers = [10, 9, -5, 2, 3, 4, 5, -10];
const answer = [];

function compareNumbers(a, b) {
	return a - b;
}

numbers.sort(compareNumbers); //주어진 숫자 정렬

for (let i of cNum) {
	let lowIndex = 0;
	let highIndex = 8;
	while (lowIndex <= highIndex) {
		let middle = Math.floor((lowIndex + highIndex) / 2);
		if (numbers[middle] < i) {
			lowIndex = middle + 1;
		} else {
			highIndex = middle - 1;
		}
		if (lowIndex >= highIndex) {
			if (numbers[middle] == i) {
				cNum[cNum.indexOf(i)] = 1;
			} else {
				cNum[cNum.indexOf(i)] = 0;
			}
		}
	}
}
console.log(cNum);

const arr = [];
arr[1] = 2;
arr[0] = 1;
console.log(arr);
*/

/*const cardArr = [6, 3, 2, 10, -10];
const arr = [10, 9, -5, 2, 3, 4, 5, -10];

function compareNumbers(a, b) {
	return a - b;
}
arr.sort(compareNumbers); //주어진 배열 정렬

function binarySearch(target, dataArr) {
	let low = 0;
	let high = dataArr.length;

	let answer = [];

	while (low <= high) {
		let mid = Math.floor((high + low) / 2);
		let guess = dataArr[mid];
		for (let i; i < target.length; i++) {
			if (guess === target[i]) {
				return (answer[i] = 1);
			} else if (guess > target[i]) {
				high = mid - 1;
			} else {
				low = mid + 1;
			}
		}
	}
	console.log(answer);
	return answer;
}

binarySearch(cardArr, arr);
*/
const input = [];
let numList = undefined;
const strToNumArr = (str) => str.split(" ").map((numChar) => Number(numChar));

const binarySearch = (num, startIndex, endIndex) => {
	if (endIndex < startIndex) return false;
	if (endIndex === startIndex) return num === numList[startIndex];

	const pivotIndex = Math.floor((endIndex + startIndex) / 2);

	if (num === numList[pivotIndex]) return true;
	else if (num > numList[pivotIndex]) {
		return binarySearch(num, pivotIndex + 1, endIndex);
	} else if (num < numList[pivotIndex]) {
		return binarySearch(num, startIndex, pivotIndex - 1);
	}
};

require('readline').createInterface(process.stdin, process.stdout).on('line', function(line) {
	input.push(line.trim());
}).on('close', function() {
	const numListFinalIndex = Number(input[0] - 1);
	numList = strToNumArr(input[1].sort((a,b) => a - b);
	const searchNumList = strToNumArr(input[3]);
	const result = searchNumList.reduce(
		(arr, curr) => (acc += `${binarySearch(curr, 0, numListFinalIndex) ? 1 : 0}`), ""
	);
	
	console.log(result)
})

