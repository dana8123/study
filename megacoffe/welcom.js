process.stdin.resume();
process.stdin.setEncoding("utf8");

const readline = require("readline");
const reader = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
const category = {
	아메리카노: 10000,
	카페모카: 15000,
	카라멜마키아또: 30000,
	민트초코칩: 20000,
	민트초코젤라또: 30000,
	초코민트젤라또: 30000,
};
class member {
	constructor(id, pwd, coupon) {
		this.id = id;
		this.pwd = pwd;
		this.coupon = coupon;
	}
}

const hanna = new member("hanna", 1234);
let cart = [];

const intro = function () {
	console.log("메가커피에 오신 것을 환영합니다🔔");
	order();
};

const order = async function () {
	reader.question(
		"각 카테고리를 입력하면 메뉴가 나타납니다.(커피, 스무디, 사이드 중 1개 입력)\n 추가 주문하실 내용이 없으면 끝 이라고 입력해주세요.\n",
		(answer) => {
			if (answer == "커피") {
				return coffee(answer);
			} else if (answer == "스무디") {
				return smoothie(answer);
			} else if (answer == "사이드") {
				return dessert();
			} else if (answer == "끝") {
				return outro();
			} else {
				console.log("😡 그런 메뉴는 없습니다. 🚨 자꾸 이러시면 고소합니다.");
				return intro();
			}
		}
	);
};

const coffee = function (answer) {
	reader.question(
		"커피 메뉴는 아메리카노(10,000), 카페모카(15,000), 카라멜마키아또(30,000) 세가지가 있습니다. 무엇을 주문하시겠습니까? :\n",
		(answer) => {
			reader.question(
				"아이스로 드릴까요 핫으로 드릴까요? (아이스/핫) : ",
				(state) => {
					cart.push(`${state}${answer}`);
					console.log(`주문하신 내용은 ${cart}입니다`);
					return order();
				}
			);
		}
	);
};

const smoothie = function (answer) {
	console.log("스무디 같은걸 왜 드세요? 액상과당이 부족하신가요?");
	return order();
};

const dessert = function (answer) {
	reader.question(
		"디저트류는 민트초코칩(20,000), 초코민트젤라또(30,000), 민트초코젤라또(30,000) 세가지가 있습니다. 무엇을 주문하시겠습니까? :",
		(answer) => {
			cart.push(answer);
			console.log(`주문하신 내용은 ${cart}입니다`);
			return order();
		}
	);
};

const outro = async function () {
	reader.question("회원이신가요? (yes/no)", (answer) => {
		if (answer == "yes") {
			console.log(
				"네.. 회원이시군요...적립해드렸고요.. 인터넷 영수증 발급드렸습니다."
			);
		}
		console.log(`감사합니다 호갱님 주문하신 ${cart} 나왔습니다 ^^`);
	});
};

intro();

//console.log(`감사합니다 호갱님 주문하신 ${cart}나왔습니다!`);
