const findDuplicate = function (nums) {
	let start = 1;
	let end = Math.max(...nums);
	let answer = 1;

	while (start <= end) {
		let middle = Math.floor((start + end) / 2);
		let cnt = 0;
		console.log("mid", middle);
		for (let prop of nums) {
			if (prop <= middle) {
				//console.log("계산", prop, "<=", middle);
				cnt++;
			}
		}

		console.log("=>", cnt); //3
		let bigCnt = nums.length - cnt;
		//console.log("=>", bigCnt); //1
		answer = middle;
		if (cnt > bigCnt) {
			end = middle - 1;
		} else {
			start = middle + 1;
			if (start >= end) {
				console.log("answer2===>>>", start);
				answer = start;
				break;
			}
		}
	}
	console.log("answer", answer);
	return answer;
};

findDuplicate([1, 3, 4, 2, 1]);
//findDuplicate([1, 3, 4, 2, 2]);
//findDuplicate([3, 1, 3, 4, 2]);
//findDuplicate([1, 1]);
//findDuplicate([1, 2, 2]);
