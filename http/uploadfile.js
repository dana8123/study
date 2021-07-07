const formidable = require("formidable");
const http = require("http");

http
	.createServer(function (req, res) {
		//업로드 파일을 파싱. 서버에 도달하기 전에 파일을 파싱할 수 있다.(formidable 모듈이)
		//파일이 업로드되고, 파싱될 때, 컴퓨터의 임시 폴더에 위치한다.
		if (req.url == "/fileupload") {
			const form = new formidable.IncomingForm();
			form.parse(req, function (err, fields, files) {
				const oldpath = files.fileupload.path;
				const newpath = "./" + files.filetoupload.name;
				res.write("File upload");
				res.end();
			});
		} else {
			//upload form을 생성
			res.writeHead(200, { "Content-Type": "text/html" });
			res.write(
				'<form action="fileupload" method="post" enctype="multipart/form-data>'
			);
			res.write('<input type = "file" name="filetoupload><br>');
			res.write('<input type="submit">');
			res.write("</form>");

			return res.end();
		}
	})
	.listen(8080);
