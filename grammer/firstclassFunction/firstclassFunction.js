const foo = function () {
	console.log("foobar");
};
// 변수명을 이용해 함수를 호출
foo();

// 익명함수를 변수에 할당하였음. 이후 변수명()을 이용해 함수 호출
// 함수에 이름을 지어줬어도 변수명으로 호출이 가능함.

const goo = function abc() {
	console.log("goobar");
};

goo();
