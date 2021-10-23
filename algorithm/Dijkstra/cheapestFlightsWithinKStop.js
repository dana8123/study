const findCheapestPrice = function (n, flights, src, dst, k) {
	let prices = new Array(n).fill(Math.min());
	prices[src] = 0;

	for (let i = 0; i < k + 1; i++) {
		const tempPrice = [...prices];
		for (let [s, d, p] of flights) {
			if (prices[s] === Math.min()) continue;
			if (prices[s] + p < tempPrice[d]) {
				tempPrice[d] = prices[s] + p;
			}
		}
		prices = tempPrice;
	}
	return prices[dst] === Infinity ? -1 : prices[dst];
};
