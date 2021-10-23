/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
	let money = 0;
	for (let i = 0; i < pricess.length; i++) {
		if (prices[i + 1] > prices[i]) {
			money += prices[i + 1] - prices[i];
		}
	}
	return money;
};
