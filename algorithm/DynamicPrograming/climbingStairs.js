/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
	let dp = [];
	dp[0] = 1;
	dp[1] = 1;
	for (let i = 2; i < n + 1; i++) {
		dp[i] = climbStairs(dp[i - 1]) + climbStairs(dp[i - 2]);
	}

	return dp[n - 1];
};
