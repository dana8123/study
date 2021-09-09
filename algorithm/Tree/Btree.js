const NKEYS = 4;

function arrayOfSize(size) {
	const a = new Array(size);

	for (let i = 0; i < size; i++) {
		a[i] = null;
	}
	return a;
}

// B tree의 key 와 노드의 갯수는 Node + 1 = 최대 key 의 관계를 갖는다.
function BTreeNode() {
	this._keyCount = 0;
	this._keys = arrayOfSize(NKEYS);
	this._childs = arrayOfSize(NKEYS + 1);
}

// leaf 인 경우, 사용할 메서드
BTreeNode.prototype.isLeaf = function () {
	return this._childs[0] === null;
};

// 노드가 꽉 찬 경우, 리턴값은 노드의 최대키
BTreeNode.prototype.isFull = function () {
	return this._keyCount === NKEYS;
};

// 노드 내의 키 수를 카운트한 결과를 리턴
BTreeNode.prototype.keyCount = function () {
	return this._keyCount;
};

// 노드에 삽입
// Case 01 : 리프노드이면서, 최대키가 아닌경우
// Case 02 : 리프노드이면서, 최대키인 경우
BTreeNode.prototype.insert = function () {
	if (this.isLeaf()) {
		if (this.isFull()) {
			// case 02
			/**
			 * 리프노드이면서, 최대키인 경우
			 * 적절한 노드를 찾는 과정 필요
			 * 해당 노드에 추가하는 과정 필요
			 * 해당 노드에서 미들값을 부모노드로 옮기는 과정 필요
			 * 형제노드를 자식노드로 바꾸는 과정 필요
			 */
			return this.split(key, null);
		} else {
			// case 01
			/**
			 * 리프노드이면서 최대키가 아닌 경우
			 * 적절한 노드를 찾는 과정 필요
			 * 해당 노드에 추가하는 과정 필요
			 */
			return this.insertKey(key);
		}
	} else {
		/* 리프노드가 아니라면 아래로 더 내려가야함.
		 * 자식노드로 내려가서 다시 add 실행
		 * 자식노드가 꽉 찼으면 split메서드를 실행한다.
		 * 최대키 미만의 노드라면, insertSplit을 이용해 키를 삽입한다??? 상향식 추가 아니었음..? 생가캐보자..
		 */
		let child = this.getChildContaining(key);

		let split = child.add(key);
		if (!split) return null;

		if (this.isFull()) return this.split(split.key, split.right);
		else this.insertSplit(split);
	}
};

// 최대키 미만의 노드에 키 삽입하기
BTreeNode.prototype.insertKey = function (key) {
	console.assert(this.isLeaf());

	let pos = this.keyCount();
	let keys = this._keys;

	while (pos > 0 && keys[pos - 1] > key) {
		keys[pos] = keys[pos - 1];
		pos--;
	}

	keys[pos] = key; // 삽입된 키의 최종위치 결정
	this._keyCount++;
};

// node에 key 추가하기
BTreeNode.prototype.addKey = function (key) {
	let count = this.keyCount();
	let keys = this._keys;
	// 노드에 key가 1개 이상 존재하고, 노드에 존재하는 key 중 가장 큰 값이
	// 노드내부를 순회하면서 삽입하려는 키보다 노드 내부의 키가 큰 값일 때, 해당 키를 뒤로 옮긴다
	// 삽입하려는 key보다 큰 key들을 뒤로 옮긴다. 이후 그 자리에 키를 삽입한다.
	while (count > 0 && keys[count - 1] > key) {
		keys[count] = keys[count - 1];
		count--;
	}
	keys[count] = key;
	this._keyCount += 1;
};

// node 순회하며 자식 노드의 key 확인하기
// 해당 노드를 key의 갯수만큼 순회하면서, 자식노드를 반환한다.
// 만약 부모보다 크거나 같은 key를 찾으면, 해당 자식key를 반환한다.
// 부모보다 큰 자식이 없다면, 가장 큰 왼쪽 자식을 반환한다.
BTreeNode.prototype.getMostOfLeftSubtrees = function (key) {
	for (let i = 0; i < this.keyCount(); i++) {
		if (key <= this._keys[i]) {
			return this._children[i];
		}
	}
	return this._children[this.keyCount()];
};

// 현재 노드의 최대 키보다 많은 키가 있으면 분할한다.
// 현재 노드의 중간값이 부모노드가되고, 남은 자식들이 부모노드의 좌,우 자식으로 변한다.
BTreeNode.prototype.split = function (key, keyRightChild) {
	let left = this;
	let right = new BTreeNode();
	// key 최대값에 null을 넣은 배열
	let keys = this._keys.slice();
	keys.push(null);
	// 자식노드 최대값에 null을 넣은 배열
	let children = this._children.slice();
	children.push(null);

	// 해당 노드를 순회하면서, 현재 삽입한 key보다 큰 key들을 뒤로 미루며 key의 자리를 찾음
	// 해당 키의 자식노드도 한 칸 씩 앞으로 온다.
	let count = keys.length - 1;
	while (count > 0 && keys[count - 1] > key) {
		keys[count] = keys[count - 1];
		children[count + 1] = children[count];
		count--;
	}
};

function Btree() {
	this._root = new BTreeNode();
}

Btree.prototype.add = function (key) {
	let curr = this._root;
	let split = curr.add(key);
	if (!split) return;

	this._root = BTreeNode.fromSplit(split);
};

// PROGRAM

let btree = new Btree();

let a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let a2 = [4, 2, 7, 1, 5, 3, 8];

let a = a1;

a.forEach(function (v) {
	btree.add(v);
});
console.log(btree.toString());
