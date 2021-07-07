const fs = require("fs");

fs.open("mynewfile2.txt", "w", function (err, file) {
	if (err) throw err;
	console.log("Saved!");
});
//w 는 writing에 대한 표기이다. 만약 열 파일이 존재하지 않는다면, 빈 파일이 생성된다.
