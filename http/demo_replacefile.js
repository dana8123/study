const fs = require("fs");

fs.writeFile("mynewfile3.txt", "This is my new text", function (err) {
	if (err) throw err;
	console.log("Replaced!");
});

//만약 해당하는 파일이 없으면 그냥 무시됨..에러도 안뱉는데 뭐지..
