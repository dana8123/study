function sayHello() {
	return "Hello, ";
}

function greeting(helloMessage, name) {
	console.log(helloMessage() + name);
}

// sayHello 가 greeting함수의 인자로 전달됨
greeting(sayHello, "javascript!");
