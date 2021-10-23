const INF = Infinity;
const arr = [
	[0, 2, 5, 1, INF, INF],
	[2, 0, 3, 2, INF, INF],
	[5, 3, 0, 3, 1, 5],
	[1, 2, 3, 0, 1, INF],
	[INF, INF, 1, 1, 0, 2],
	[INF, INF, 5, INF, 2, 0],
];

const isVisit = new Array(6).fill(false);

const getMin = function (vertex) {
	let min = INF;
	let idx = 0;
	for (let i = 0; i < vertex.length; i++) {
		if (min > vertex[i] && !isVisit[i]) {
			min = vertex[i];
			idx = i;
		}
	}
	return idx;
};

const dist = function (start) {
	let v = arr[start - 1];
};
