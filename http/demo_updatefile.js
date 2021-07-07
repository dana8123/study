const fs = require("fs");

fs.appendFile("mynewfile1.txt", "This is my text. and!", function (err) {
	if (err) throw err;
	console.log("Updated!");
});

// 해당 파일에 append되는 방식으로 업데이트가 됨.
