class Notebook {
	constructor(name, price, company) {
		this.name = name;
		this.price = price;
		this.company = company;
	}
}

const notebook1 = new Notebook("MacBook", 2000000, "Apple");

console.log(notebook1); // Notebook { name: 'Macbook', price: 2000000, company: 'Apple' }
console.log(notebook1.name); // MacBook
console.log(notebook1.price); // 2000000
console.log(notebook1.company); // Apple
