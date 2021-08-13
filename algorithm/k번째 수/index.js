function solution(array, commands) {
	const answer = [];
	//commmands의 첫번째 숫자 : n부터
	//commands의 두번째 숫자 : m까지 자른 중에
	//commands의 세번째 숫자 : k번째 값을 리턴해라
	for (let i = 0; i < commands.length; i++) {
		let list = array
			.slice(commands[i][0] - 1, commands[i][1])
			.sort((a, b) => a - b);

		answer.push(list[commands[i][2] - 1]);
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
