// 인쇄되는 조건과 내 문서의 위치, 인쇄가 몇 번 됐는지 체크
/*
 * 프린터 queue의 첫번째 문서가 우선순위 문서인지 확인한다
 * 우선순위 문서라면 해당 문서를 큐에서 제거하고, 인쇄횟수를 늘린다.
 * 이 때 내 문서의 location도 -- 해준다.
 * 우선순위 문서가 아니라면, 해당 문서를 queue의 가장 마지막 위치로 옮긴다
 * 이 때 내 문서의 location도 -- 해준다.
 * 단, 이 때 현재 문서가 내 문서라면, location을 문서의 가장 마지막으로 변경한다.
 */
function solution(priorities, location) {
	let answer = 0;
	while (priorities.length) {
		let current = priorities[0];
		// 우선순위가 아닌경우
		if (current < Math.max(...priorities)) {
			if (location === 0) {
				location = priorities.length;
			}
			priorities.shift();
			priorities.push(current);
		} else {
			answer++;
			if (location === 0) {
				break;
			}
			priorities.shift();
		}
		location--;
	}
	return answer;
}

console.log(solution([1, 1, 9, 1, 1, 1], 0));
