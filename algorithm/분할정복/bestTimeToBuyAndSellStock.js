/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	let min_price = Number.MAX_VALUE;
	let profit = 0;

	for (let price of prices) {
		console.log(price);
		min_price = Math.min(min_price, price);
		profit = Math.max(profit, price - min_price);
	}

	return profit;
};
