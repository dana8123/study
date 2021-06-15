const computer = {
	name: "apple macbook",
	price: 20000,
	printInfo: function () {
		//this : 객체의 속성에 접근하기 위한 키워드
		console.log(`상품명: ${this.name} 가격 : ${this.price}`);
	},
};

computer.printInfo();

//이처럼 객체 리터럴을 이용해 빠르게 메서드를 만들 수 있지만
//재사용성을 위해 클래스와 메서드를 각각 생성한다.
