const name = "zero";
function outer() {
	console.log("외부", name);
	function inner() {
		const enemy = "nero";
		console.log("내부", name);
	}
	inner();
}
outer();
console.log(enemy); // undefined
