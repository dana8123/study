// makeCounter가 반환하는 함수는 자식이 생성되었을 때의 렉시컬 환경인 counter 변수를 기억하는 클로저이다.
// makeCounter함수를 통해 반환된 함수는 독립된 렉시컬 환경을 갖게됨.
// 함수를 호출할 때 마다 새로운 렉시컬 환경이 생성되기 때문.
function makeCounter(predicate) {
	let counter = 0;
	// 클로저를 반환
	return function () {
		counter = predicate(counter);
		return counter;
	};
}

function increase(n) {
	return ++n;
}

function decrease(n) {
	return --n;
}

const increaser = makeCounter(increase);
console.log(increaser());
console.log(increaser());

const decreaser = makeCounter(decrease);
console.log(decreaser());
console.log(decreaser());
