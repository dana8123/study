/**
 * @param {number} n
 * @return {number}
 */
// 브루트포스
// var fib = function (n) {
// 	if (n <= 1) return n;

// 	return fib(n - 1) + fib(n - 2);
// };

//메모이제이션
// /**
//  * @param {number} n
//  * @return {number}
//  */
// var fib = function (n) {
// 	if (n <= 1) return n;
// 	let dp = [];
// 	if (dp[n]) return dp[n];

// 	dp[n] = fib(n - 1) + fib(n - 2);

// 	return dp[n];
// };

//타뷸레이션

var fib = function (n) {
	if (n <= 1) return n;

	let dp = [];
	dp[1] = 1;

	for (let i = 2; i < n + 1; i++) {
		dp[i] = dp[i - 1] + dp[i - 2];
	}

	return dp[n];
};
