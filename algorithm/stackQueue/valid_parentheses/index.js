const isValid = function (s) {
	if (s.length % 2 !== 0) return false;
	const pairs = {
		"{": "}",
		"[": "]",
		"(": ")",
	};
	let stack = [];
	for (let i = 0; i < s.length; i++) {
		if (pairs.hasOwnProperty([s[i]])) {
			stack.push(s[i]);
		} else if (pairs[stack[stack.length - 1]] === s[i]) {
			stack.pop();
		} else {
			return false;
		}
	}
	console.log(stack.length);
	return stack.length === 0;
};

console.log(isValid("([}}])"));
