function solution(answers) {
	const answer = [];
	const supoja1 = [1, 2, 3, 4, 5];
	const supoja2 = [2, 1, 2, 3, 2, 4, 2, 5];
	const supoja3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
	let count1 = 0;
	let count2 = 0;
	let count3 = 0;
	for (let i = 0; i < answers.length; i++) {
		if (supoja1[i % supoja1.length] === answers[i]) count1++;
		if (supoja2[i % supoja2.length] === answers[i]) count2++;
		if (supoja3[i % supoja3.length] === answers[i]) count3++;
	}
	console.log(count1, count2, count3);
	if (count1 >= count2 && count1 >= count3) answer.push(1);
	if (count2 >= count1 && count2 >= count3) answer.push(2);
	if (count3 >= count1 && count3 >= count2) answer.push(3);
	console.log(answer);
	return answer;
}

solution([1, 3, 1, 1, 2, 4, 2, 5]);
