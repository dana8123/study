class Node {
	constructor(data) {
		this.data = data;
		this.children = [];
	}

	add(data) {
		this.children.push(new Node(data));
	}

	remove(data) {
		this.children = this.children.filter((child) =>
			child.data === data ? false : true
		);
	}
}

class Tree {
	constructor() {
		this.root = null;
	}

	BFS(fn) {
		if (this.root === null) return;

		const unvisitedQueue = [this.root];
		while (unvisitedQueue.length != 0) {
			const current = unvisitedQueue.shift(); // dequeue
			unvisitedQueue.push(...current.children); // 현재 부모 노드의 자식들을 모두 큐에 넣는다.
			fn(current);
		}
	}
}

/*const t = new Tree(); // 빈 트리 생성
t.root = new Node("a"); // 루트가 node 'a' 의 주소를 가리키면 a의 자식들까지 접근 가능
t.root.add("b"); //a의 자식 b, c
t.root.add("c");
t.root.children[0].add["d"]; //b의 자식으로 d 추가.

console.log(t);
*/
