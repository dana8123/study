/**
 * 쌍에 대한 정보를 가진 object를 생성
 * 스택에 key에 해당하는 값을 확인하고 key를 넣음
 * 스택에 존재하는 key에 해당하는 value값이 들어올 때 pop
 * 스택이 전부 비면 true, 아니면 false
 * key의 경우 property라고 한다.
 */

var isValid = function (s) {
	const paris = {
		"{": "}",
		"[": "]",
		"(": ")",
	};
	const stack = [];
	for (let i = 0; i < s.length; i++) {
		if (paris.hasOwnProperty(s[i])) {
			stack.push(s[i]);
		} else {
			if (stack.length !== 0 && paris[stack[stack.length - 1]] === s[i]) {
				stack.pop();
			} else {
				return false;
			}
		}
	}
	return stack.length === 0;
}; // []  pairs[`(`] = )

console.log(isValid("()"));
