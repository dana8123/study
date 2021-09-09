class Btree {
	constructor(t) {
		this.root = null;
		this.t = t;
	}

	traverse() {
		if (this.root != null) this.root.traverse();
		document.write("<br");
	}
}
