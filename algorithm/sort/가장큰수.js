function solution(numbers) {
	let temp = numbers.map((a) => String(a)).sort((a, b) => b + a - (a + b));

	return temp.join("");
}
console.log(solution([6, 10, 2]));

/**
 * 숫자들을 String으로 변환
 * 이어지는 숫자의 크기를 비교했을 때
 * b+a < a+b (ex : 30+3 < 3+30)이면 두 숫자의 위치를 변경한다.
 * join 메서드를 이용해 배열의 모든 요소를 연결해 문자열로 만듦
 */
