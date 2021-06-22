"use strict";

/*let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

//const if = 534;


function logger() {
	console.log("My name is yj");
}

// calling , running, invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
	const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
	return juice;
}
// 반환된 값을 사용하려면 변수으 저장해야함
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


//////////////////////////////////////////////
/////34강,function decleration and express////
/////////////////////////////////////////////

// function declaration
function calcAge1(birthYear) {
	return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// function expression
const calcAge2 = function (birthYear) {
	return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age1, age2);

// 함수는 value이다. value를 variable에 저장할 수 있는 것 처럼. 값을 변수에 저장 가능하다.

*/

///////////////////////
////arrow function/////
///////////////////////

// function declaration
const calcAge2 = function (birthYear) {
	return 2037 - birthYear;
};
// arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear) => {
	const age = 2037 - birthYear;
	const retirement = 65 - age;
	return retirement;
};

yearsUntilRetirement(1991);
