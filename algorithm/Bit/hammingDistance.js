/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = function (x, y) {
	x = x.toString(2);
	y = y.toString(2);
	const cal = x ^ y;
	console.log(typeof cal);
	let count = 0;
	for (number of cal) {
		if (number === 1) count++;
	}

	return count;
};
