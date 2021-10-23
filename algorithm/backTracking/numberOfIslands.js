/**
 * @param {character[][]} grid
 * @return {number}
 */
/*
이렇게 푸니까, 콜스택 사이즈보다 커져서 에러가 발생...하..자바스크립트...
const numIslands = function (grid) {
	let count = 0;
	function dfs(grid, i, j) {
		if (
			i > grid.length ||
			j > grid[0].length ||
			i < 0 ||
			j- < 0 ||
			grid[i][j] != 1
		) {
			return;
		}
		dfs(grid, i, j + 1);
		dfs(grid, i, j - 1);
		dfs(grid, i + 1, j);
		dfs(grid, i - 1, j);
	}

	for (let i = 0; i < grid.length; i++) {
		console.log(1);
		for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j] === "1") {
				count++;
				console.log(count);
				dfs(grid, i, j);
			}
		}
	}
	console.log(count);
	return count;
};

numIslands([
	["1", "1", "1", "1", "0"],
	["1", "1", "0", "1", "0"],
	["1", "1", "0", "0", "0"],
	["0", "0", "0", "0", "0"],
]);
*/

/*
if문으로 나누면 콜스택을 아껴 쓸 수 있을줄 ..왜 안되지;;
const numIslands = function (grid) {
	let count = 0;
	function dfs(grid, i, j) {
		if (
			i > grid.length ||
			j > grid[0].length ||
			i < 0 ||
			j < 0 ||
			grid[i][j] != 1
		)
			return;
		if (i < grid.length - 1) dfs(grid, i + 1, j);
		if (j < grid.length - 1) dfs(grid, i, j + 1);
		if (i > 0 && i < grid.length) dfs(grid, i - 1, j);
		if (j > 0 && j < grid.length) dfs(grid, i, j - 1);
	}

	for (let i = 0; i < grid.length; i++) {
		console.log(1);
		for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j] === "1") {
				count++;
				console.log(count);
				dfs(grid, i, j);
			}
		}
	}
	console.log(count);
	return count;
};
*/
