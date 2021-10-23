/**
 * times = 각 정점까지에 대한 가중치 정보를 담은 list
 * n = 모든 정점의 갯수
 * k = 시작 정점
 */

const networkDelayTime = function (times, n, k) {
	let distance = Array(n + 1).fill(Infinity);
	distance[k] = 0;
	for (let i = 0; i < n; i++) {
		for (const [u, v, w] of times) {
			if (distance[u] === Infinity) continue;
			if (distance[v] > distance[u] + w) {
				distance[v] = distance[u] + w;
			}
		}
	}

	let res = 0;
	for (let i = 1; i <= n; i++) {
		res = Math.max(res, distance[i]);
	}
	return res === Infinity ? -1 : res;
};
