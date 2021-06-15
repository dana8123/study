class Product {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}
	//method
	printInfo() {
		console.log(`name : ${this.name}, price: ${this.price}`);
	}
}

const notebook = new Product("Macbook", 2000000);

notebook.printInfo();
