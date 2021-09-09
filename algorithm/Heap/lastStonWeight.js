/*
const lastStoneWeight = function (stones) {
	stones.sort((a, b) => b - a);
	if (stones.length === 1) {
		return stones;
	} else if (stones.length === 0) {
		return 0;
	} else { 
		let heavy1 = stones[0];
		let heavy2 = stones[1];
		if (heavy1 - heavy2 > 0) {
			let newStone = heavy1 - heavy2;
			stones.push(newStone);
		}
		return lastStoneWeight(stones);
	}
};
*/

/*
const lastStoneWeight = function (stones) {
	if (stones.length <= 1) {
		return stones.length ? stones[0] : 0;
	}

	let heap = [
		{ value: stones[0], index: 0 },
		{ value: stones[1], index: 1 },
	];
	let i = 1;
	while (i < stones.length) {
		if (heap[0].value < stones[i]) {
			const heapLargest = heap[0];
			heap[0] = { value: stones[i], index: i };
			heap[1] = heapLargest;
		} else if (heap[1].value < stones[i]) {
			heap[1] = { value: stones[i], index: 1 };
		}
		i++;
	}

	const stonesDiff = heap[0].value - heap[1].value;
	const k = !!(heap[0].index > heap[1].index);
	if (stonesDiff === 0) {
		stones.splice(heap[k ? 0 : 1].index, 1);
		stones.splice(heap[k ? 1 : 0].index, 1);
	} else {
		stones.splice(heap[0].index, 1, stonesDiff);
		stones.splice(heap[1].index, 1);
	}
};
*/

const lastStoneWeight = function (stones) {
	stones.sort((a, b) => b - a);
	console.log(stones);
	if (stones <= 1) {
		return stones.length ? stones[0] : 0;
	} else {
		let largest = stones[0];
		let second = stones[1];
		stones.splice(0, 3);
		let newStone = largest - second;
		if (newStone > 0) {
			stones.push(newStone);
		}
		return lastStoneWeight(stones);
	}
};

lastStoneWeight([2, 7, 4, 1, 8, 1]);
