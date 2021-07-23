const graph = {
	A: ["B", "C"],
	B: ["A", "D"],
	C: ["A", "G", "H", "I"],
	D: ["B", "E", "F"],
	E: ["D"],
	F: ["D"],
	G: ["C"],
	H: ["C"],
	I: ["C", "J"],
	J: ["I"],
};

const bfs = (graph, startNode) => {
	let visited = [];
	let needVisited = [];

	needVisited.push(startNode);

	while (needVisited.length !== 0) {
		const node = needVisited.shift(); //dequeue
		if (!visited.includes(node)) {
			//node가 방문한 노드에 포함되지않으면
			visited.push(node); //해당 노드를 방문하라
			needVisited = [...needVisited, ...graph[node]]; //방문하지 않은 노드는 기존 방문하지않은 노드 + 자식 노드
		}
	}
	return visited;
};

console.log(bfs(graph, "A"));
