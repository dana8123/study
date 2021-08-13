var MinStack = function () {
	this.stack = [];
};

MinStack.prototype.push = function (val) {
	this.stack.push(val);
};

MinStack.prototype.pop = function () {
	this.stack.pop();
};

MinStack.prototype.top = function () {
	return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function () {
	return this.stack.reduce((a, b) => (a > b ? b : a));
};

console.dir(MinStack.prototype);

// 전개구문
// spread operator
