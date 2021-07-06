/*const oneTwoThree = [1, 2, 3];
let result = oneTwoThree.reduceRight((acc, cur, i) => {
	console.log(acc, cur, i);
	return acc + cur;
}, 0);

console.log(result);
*/

/* const oneTwoThree = [1, 2, 3];
let result = oneTwoThree.reduce((acc, cur) => {
	acc.push(cur % 2 ? "홀수" : "짝수");
	return acc;
}, []);

console.log(result);

result = oneTwoThree.reduce((acc, cur) => {
	if (cur % 2) acc.push(cur);
	return acc;
}, []);

console.log(result);
*/

const promiseFactory = (time) => {
	return new Promise((resolve, reject) => {
		console.log(time);
		setTimeout(resolve, time);
	});
};

[1000, 2000, 3000, 4000].reduce((acc, cur) => {
	return acc.then(() => promiseFactory(cur));
}, Promise.resolve());
