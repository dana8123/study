function solution(array, commands) {
	const answer = [];
	for (let a = 0; a < commands.length; a++) {
		let i = commands[a][0];
		let j = commands[a][1];
		let k = commands[a][2];

		let copyArray = array.slice(i - 1, j);
		copyArray.sort((a, b) => a - b);
		answer.push(copyArray[k - 1]);
	}
	console.log(answer);
	return answer;
}

solution(
	[1, 5, 2, 6, 3, 7, 4],
	[
		[2, 5, 3],
		[4, 4, 1],
		[1, 7, 3],
	]
);

/* 
sort의 경우, 원본이 변경되는 정렬.
유니코드로 정렬하기 때문에 따로 compare 함수의 형식을 취해줘야 함.
sort method는 배열의 종류에 따라 다른 알고리즘을 사용한다.
숫자배열은 퀵정렬을 사용하고
숫자가 아닌 배열은 병합정렬을 사용한다.
그러나 sort()가 항상 최선의 알고리즘이 아닐 수 있기 때문에 정렬 알고리즘을 알아야한다..
slice의 경우, 얕은 복사본 배열을 반환하기 때문에 변수에 넣어주었다.
*/
