function a() {
	let b = "foo";
	return b;
}
function c() {
	let d = "bar";
	return d;
}

function e() {
	a();
	c();
	console.log(a(), c()); //foo, bar
}
e();

function start() {
	return 20;
}

function end() {
	return 50;
}

function between() {
	start();
	end();
	console.log(end().diff(start()));
}

between();
