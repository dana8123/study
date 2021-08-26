// 세개의 데이터를 가진 노드 클래스를 선언함.
class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(data) {
		// creating a node and initializing
		const newNode = new Node(Data);

		// root 노드가 null 이라면, 루트 노드에 값을 넣는다.
		if (this.root === null) {
			this.root = newNode;
		} else {
			// 해당 트리를 찾고, 노드를 추가한다.
			this.insertNode(this.root, newNode);
		}
	}
	// 삽입할 데이터를 노드에 삽입하라.
	insertNode(node, newNode) {
		// 삽입할 데이터가 노드의 데이터보다 작으면 트리의 왼쪽으로 옮겨라
		if (newNode.data < node.data) {
			if (node.left === null) node.left = newNode;
			else this.insertNode(node.left, newNode);
		} else {
			if (node.right === null) node.right = newNode;
			else this.insertNode(node.right, newNode);
		}
	}

	remove(data) {
		this.root = this.removeNode(this.root, data);
	}

	removeNode(node, key) {
		/**
		 * 노드값과 key를 비교하여 노드값보다 작으면 왼쪽, 크면 오른쪽 자식노드와 비교한다.
		 * 그러다가 자식노드가 없는 경우가 발생하면 null을 리턴한다.
		 */
		if (node === null) return null;
		else if (key < node.data) {
			node.left = this.removeNode(node.left, key);
		} else if (key > node.data) {
			node.right = this.removeNode(node.right, key);
			/**
			 * key와 node값이 같은 지점을 찾으면, 자식의 개수에 따라 다른 조치를 취한다.
			 * 자식이 하나면, 반대편의 자식을 node값으로 하고, 해당 node를 리턴한다.
			 * 자식이 둘이면, 오른쪽 서브트리에서 최솟값을 찾아 node로 만들고 서브트리에서 해당값을 삭제한다.
			 */
		} else {
			if (node.left === null && node.right === null) {
				node = null;
				return node;
			}
			if (node.left === null) {
				node = node.right;
				return node;
			} else if (node.right === null) {
				node = node.left;
				return node;
			}

			// 두개의 자식노드를 삭제할 때,
			/**
			 * 오른쪽의 하위 서브트리에서 최소값을 node.data로 변경한다.
			 * 서브트리의 최소값은 지운다.
			 */
			let aux = this.findMinNode(node.right);
			node.data = aux.data;
			node.right = this.removeNode(node.right, aux.data);
			return node;
		}
	}
}
