class HashEntry {
	constructor(key, data) {
		this.key = key;
		this.value = data;
		this.next = null;
	}
}

let entry = new HashEntry(3, "Educative");
console.log(String(entry.key) + "," + entry.value);

class HashTable {
	constructor() {
		this.slots = 10;
		this.size = 0;
		this.bucket = [];
		for (let i = 0; i < this.slots; i++) {
			this.bucket[i] = null;
		}
	}
	get_size() {
		return this.size;
	}

	isEmpty() {
		return this.get_size() === 0;
	}

	getIndex(key) {
		let index = key % this.slots;
		return index;
	}
}

let ht = new HashTable();
console.log(ht.isEmpty());
console.log(ht.getIndex(4));
console.log(ht.isEmpty());
