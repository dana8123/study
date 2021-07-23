const n = 5;
for (let i = 1; i < n; i++) {
	const board = new Array(n + 1).fill(0);
	board[1] = i; // 체스판 세로 라인의 첫번째 라인 중 i칸에 퀸을 배치
}
