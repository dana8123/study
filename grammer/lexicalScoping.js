var name = "zero";
function log() {
	console.log(name); // 선언하는 순간 전역변수인 zero를 가리키게됨. 절대 바꿀 수 없음.
}

function wrapper() {
	var name = "nero";
	log();
}
wrapper();
