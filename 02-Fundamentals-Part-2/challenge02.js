/* const calcAverage = (scores1, scores2, scores3) =>
	(scores1 + scores2 + scores3) / 3;

let DolphinsScore = calcAverage(44, 23, 71);
let koalasScore = calcAverage(65, 54, 49);
console.log(DolphinsScore, koalasScore);

const checkWinner = (avgDolhins, avgKoalas) => {
	if (avgDolhins >= avgKoalas * 2) {
		console.log(`Dolphins win${avgDolhins} vs. ${avgKoalas}`);
	} else if (avgDolhins * 2 <= avgKoalas) {
		console.log(`koalas win ${avgKoalas} vs. ${avgDolhins}`);
	} else {
		console.log("no team wins...");
	}
};

checkWinner(DolphinsScore, koalasScore);

// 함수는 모두 독립적이다.

// test 2
DolphinsScore = calcAverage(85, 54, 41);
koalasScore = calcAverage(23, 34, 27);
console.log(DolphinsScore, koalasScore);
checkWinner(DolphinsScore, koalasScore);
*/

// coding challenge #2

const bills = [125, 555, 44];

const calcTip = function (bill) {
	let tips = [];
	const total = [];
	for (let i = 0; i < bill.length; i++) {
		if (50 <= bill[i] && bill[i] <= 300) {
			tip = bill[i] * 0.15;
		} else {
			tip = bill[i] * 0.2;
		}
		tips.push(tip);
		totalValue = tips[i] + bills[i];
		total.push(totalValue);
	}
	console.log(bills, tips, total);

	return tip;
};

calcTip(bills);
