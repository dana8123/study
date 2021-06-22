// 함수를 다른 함수로 리턴할 수 있음.
// 자바스크립트는 함수를 변수처럼 다루기 때문이다.
// Higher-Order Function.
function sayHello() {
	return function () {
		console.log("Hello!");
	};
}

// 함수리턴을 할 때에는 다른 변수에 함수를 넣어 사용해야한다.
const myFunc = sayHello();
myFunc();
// 만약 아래와같이 바로 함수를 호출한다면,  함수 자체만 리턴한다.
sayHello();
