const intersect = function (nums1, nums2) {
	const answer = [];
	let sortedArray = nums1;
	let justArray = nums2;
	if (nums1.length > nums2.length) {
		sortedArray;
		justArray;
	} else {
		sortedArray = nums2;
		justArray = nums1;
	}
	sortedArray.sort((a, b) => a - b);

	for (let i = 0; i < justArray.length; i++) {
		let startIndex = 0;
		let endIndex = sortedArray.length - 1;
		while (startIndex <= endIndex) {
			let middleIndex = Math.floor((startIndex + endIndex) / 2);
			let target = sortedArray[middleIndex];
			let value = justArray[i];
			if (target === value) {
				answer.push(target);
				sortedArray.splice(middleIndex, 1);
				break;
			} else {
				if (value < target) {
					endIndex = middleIndex - 1;
				} else {
					startIndex = middleIndex + 1;
				}
			}
		}
	}
	console.log(answer);
	return answer;
};

/* 해당 코드의 문제점:
	짧은길이의 array(이 예에서는 nums2)를 기준이 아닌 비교역으로 잡았기 때문에,
	[1,1]에서 첫번째 요소가 기준에 있으면 추가하고, 중복되는 일이 생김..
	문제에서 요구하는 바는 두 배열에 공통된 횟수만큼만 추가하는것이기 때문에
	기준이 되는 배열에서 하나씩 제거해줘야 함.
	여기서 기존에 알고있던 shift나 pop의 경우 각각 배열의 맨 앞, 맨 뒤의 요소를 삭제하는 것이기 때문에
	비교 대상인 middleIndex에 위치한 요소를 타겟팅하여 삭제하기 어려움.
	그래서 splice 메서드를 이용해서 타겟팅해 삭제함.
	splice이외에도 delete기능을 사용할 수 있지만,
	해당 기능은 요소는 존재하고 값만을 삭제하기 때문에 (undefined로 남음)
	필요없이 탐색을 해야한다. 그래서 splice를 사용했음.
*/
intersect([3, 1, 2], [1, 1]);
