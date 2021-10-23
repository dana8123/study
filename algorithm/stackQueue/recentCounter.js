var RecentCounter = function () {
	this.queue = [];
};

RecentCounter.prototype.ping = function (t) {
	this.queue.push(t);
	if (this.queue[0] < t - 3000) {
		this.queue.shift();
	}
	return this.queue.length;
};
