const MyCircularDeque = function (k) {
	this.deque = [];
	this.size = k;
};

// deque의 맨 앞자리에 값을 추가한다. 성공 시, true를 리턴한다.
MyCircularDeque.prototype.insertFront = function (value) {
	if (this.isFull()) {
		return false;
	}
	this.deque = [...this.deque, value];
	console.log(this.deque, "<");
	return true;
};

// deque의 맨 뒷자리에 값을 추가한다. 성공 시, true를 리턴한다.
MyCircularDeque.prototype.insertLast = function (value) {
	if (this.isFull()) {
		return false;
	}
	this.deque = [value, ...this.deque];
	return true;
};

// deque의 맨 앞에서 값을 삭제한다. 성공 시 true를 리턴한다.
MyCircularDeque.prototype.deleteFront = function () {
	if (this.isEmpty()) {
		return false;
	}
	this.deque = this.deque.slice(0, this.deque.length - 1);
	console.log(this.deque);
	return true;
};

// deque의 맨 뒤에서 값을 삭제한다. 성공 시 true를 리턴한다.
MyCircularDeque.prototype.deleteLast = function () {
	if (this.isEmpty()) {
		return false;
	}
	this.deque = this.deque.slice(1);
	return true;
};

// deque의 맨 앞의 값을 가져온다.
MyCircularDeque.prototype.getFront = function () {
	if (this.isEmpty()) {
		return -1;
	}
	return this.deque[this.deque.length - 1];
};

// deque의 마지막 값을 가져온다.
MyCircularDeque.prototype.getRear = function () {
	if (this.isEmpty()) {
		return -1;
	}
	return this.deque[0];
};

// deque가 비어있는지 확인한다.
MyCircularDeque.prototype.isEmpty = function () {
	if (this.deque.length === 0) {
		return true;
	}
	return false;
};

// deque가 꽉 찼는지 확인한다.
MyCircularDeque.prototype.isFull = function () {
	if (this.deque.length === this.size) {
		return true;
	}
	return false;
};
