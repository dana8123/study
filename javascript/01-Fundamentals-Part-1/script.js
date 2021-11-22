/*let js = "amazing";
console.log(40 * 8 + 23 - 10);

let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let javascriptIsFun = true;
//dynamic typing

console.log(typeof javascriptIsFun); //boolean

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun); //string

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1990;  typeerror

//일반적으로 const로 선언하고, 어느순간 변할 수 있는 변수는 Let으로 선언해라
//mutable한 변수는 나중에 버그의 잠재적 원인이 되기 때문
//const job;

var job = "prgrammer";
job = "teacher";

lastName = "Schmedtmann";
console.log(lastName);

const now = 2037;
const ageMe = now - 1994;
const agesarah = now - 2018;

console.log(now - 1994 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

// type conversion

const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);
console.log(Number("yj"));
console.log(typeof NaN); // not a number
*/

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("yj"));
console.log(Boolean({}));
console.log(Boolean(""));

// 0은 falsy한 값이기 때문에 else문이 실행된다
const money = 0;
if (money) {
	console.log("Don't spend it all");
} else {
	console.log("You should get a job!");
}

let height;
if (height) {
	console.log("YAY! Heigth is defined");
} else {
	console.log("Hight is UNDEFINED");
}

// == 과 === 의 차이
const age = 18;
if (age === 18) console.log("You just became an adult");
