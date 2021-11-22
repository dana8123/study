const containDuplicate = function (nums) {
	console.log(new Set(nums).size);
	return new Set(nums).size < nums.length;
};

containDuplicate([2, 3, 1, 4, 1]);
