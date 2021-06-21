class Product {
	constructor(color, size, price) {
		this.color = color;
		this.size = size;
		this.price = price;
	}

	printInfo() {
		console.log(
			`color: ${this.color}, size: ${this.size}, price: ${this.price}`
		);
	}
}

const onepiece = new Product("yellow", "M", 20000);

onepiece.printInfo();
