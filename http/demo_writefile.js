const fs = require("fs");

fs.writeFile("mynewfile3.txt", "Hello content3!", function (err) {
	if (err) throw err;
	console.log("saved!");
});
