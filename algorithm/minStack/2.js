// 자바스크립트는 프로토타입 지향 언어. 모든 객체는 각자의 프로토타입을 갖는다.
// 여기서는 stack이라는 객체에 우리가 직접 프로토타입 속성을 설정해주는 것..
// Minstack이라는 변수에 stack property를 생성
const MinStack = function () {
	this.stack = [];
};
// Minstack의 stack property에 prototype에 push에 대한 값을 추가한다.
MinStack.prototype.push = function () {
	this.stack.push();
};

MinStack.prototype.pop = function () {
	this.stack.pop();
};

MinStack.prototype.top = function () {
	return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function () {
	return Math.min(...this.stack);
};
