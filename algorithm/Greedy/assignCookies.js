/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
const findContentChildren = function (g, s) {
	g.sort((a, b) => a - b);
	s.sort((a, b) => a - b);
	let child_i = 0;
	let cookie_j = 0;

	for (let num of s) {
		if (num >= g[j]) res++, j++;
	}
	return res;
};
