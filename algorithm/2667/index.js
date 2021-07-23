//백준 2667
//https://www.acmicpc.net/problem/2667
//목적 : BFS를 익히고, 문제를 풀이한다.
const fs = require("fs");
let input = fs.readFileSync("./2667/ex.txt").toString().split("\n");
const N = Number(input[0]);
input.shift();
input = input.map((element) => {
	return element
		.trim()
		.split(" ")
		.map((element) => Number(element));
});
// 입력받기...하 파이썬할까 그냥진짜...하...

const visited = [];
for (let i = 0; i < N; i++) {
	visited.push(new Array(N).fill(0));
}

const moveRow = [0, 0, 1, -1]; // 동, 서, 남, 북
const moveCol = [1, -1, 0, 0];

const rangeCheck = (row, col) => {
	if (row >= 0 && row < N && col >= 0 && col < N) {
		return true;
	}
	return false;
};

const BFS = (row, col) => {
	const queue = [];
	queue.push([row, col]); //start Node
	while (queue.length) {
		// unvisited node가 빌 때까지 while문 반복
		const target = queue.shift();
		row = target[0];
		col = target[1];
		if (visited[row][col] === 0) {
			//방문처리
			visited[row][col] = 1;
			number++;
			for (let n = 0; n < moveRow.length; n++) {
				//이동하는 코드
				if (
					rangeCheck(row + moveRow[n], col + moveCol[n]) &&
					input[row + moveRow[n]][col + moveCol[n]] === 1 // 다음 노드도 집이 있는곳으로 이동
				) {
					queue.push([row + moveRow[n], col + moveCol[n]]); //다음 노드로 이동
				}
			}
		}
	}
};

const complex = [];
let number = 0;

for (let row = 0; row < N; row++) {
	for (let col = 0; col < N; col++) {
		if (Number(input[row][col]) === 1 && visited[row][col] === 0) {
			BFS(row, col);
			complex.push(number);
			number = 0;
		}
	}
}

complex.sort((a, b) => a - b);
const answer = [complex.length, ...complex];

console.log(answer.join("\n"));
