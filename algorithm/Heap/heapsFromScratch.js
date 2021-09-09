// https://blog.bitsrc.io/implementing-heaps-in-javascript-c3fbf1cb2e65
/**
 * MinHeap의 경우 루트노드가 가장 작은값이된다.
 * 부모노드는 항상 자식노드보다 작다.
 */

class MinHeap {
	constructor() {
		this.heap = [null];
	}

	getMin() {
		return this.heap[1];
	}
	// 삽입은 array의 가장 끝에 push된다.
	insert(node) {
		this.heap.push(node);

		if (this.heap.length > 1) {
			let current = this.heap.length - 1;

			//현재 노드가 부모노드보다 작으면 아래 반복문을 시행한다.
			while (
				current > 1 &&
				this.heap[Math.floor(current / 2)] > this.heap[current]
			) {
				// [[부모노드, 자식노드]] = [[자식노드, 부모노드]] 위치를 바꿔준다.
				[this.heap[Math.floor(current / 2)], this.heap[current]] = [
					this.heap[current],
					this.heap[Math.floor(current / 2)],
				];
				// 위치를 바꾼 후 포인터를 부모노드로 옮긴다.
				current = Math.floor(current / 2);
			}
		}
	}

	remove() {
		let smallest = this.heap[1];
		// 두개 이상의 노드가 있는 경우, 오른쪽 서브트리의 리프노드를 루트노드로 바꾼 뒤, 자식노드들과 비교하면서 위치를 찾는다.
		if (this.heap.length > 2) {
			this.heap[1] = this.heap[this.heap.length - 1];
			this.heap.splice(this.heap.length - 1);
			// 힙의 길이가 3인경우, 루트노드가 왼쪽의 자식노드보다 크면 위치를 바꾼다.
			if (this.heap.length === 3) {
				if (this.heap[1] > this.heap[2]) {
					[this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
				}
				return smallest;
			}

			let current = 1;
			let leftChildIndex = current * 2;
			let rightChildIndex = current * 2 + 1;

			while (
				this.heap[leftChildIndex] &&
				this.heap[rightChildIndex] &&
				(this.heap[current] > this.heap[leftChildIndex] ||
					this.heap[current] > this.heap[rightChildIndex])
			) {
				if (this.heap[leftChildIndex] < this.heap[rightChildIndex]) {
					[this.heap[current], this.heap[leftChildIndex]] = [
						this.heap[leftChildIndex],
						this.heap[current],
					];
				} else {
					[this.heap[current], this.heap[rightChildIndex]] = [
						this.heap[rightChildIndex],
						this.heap[current],
					];
				}

				leftChildIndex = current * 2;
				rightChildIndex = current * 2 + 1;
			}
		}
		if (
			this.heap[rightChildIndex] === undefined &&
			this.heap[leftChildIndex] < this.heap[current]
		) {
			[this.heap[current], this.heap[leftChildIndex]] = [
				this.heap[leftChildIndex],
				this.heap[current],
			];
		} else if (this.heap.length === 2) {

		/* If there are only two elements in the array, we directly splice out the first element */
			this.heap.splice(1, 1);
		} else {
			return null;
		}

		return smallest;
	}

	/** 삽입(insert)
	 * 새로운 노드를 배열에 추가한다.
	 * 현재 요소를 부모의 요소로 계속 확인한다.
	 * 현재 노드가 상위 노드보다 작으면 현재 노드와 상위노드를 바꾼다.
	 * 힙의 균형을 맞추는 행위를 heapify라고한다.
	 */
}
