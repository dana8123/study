/* 
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
*/

const markW = 78;
const markH = 1.69;
const johnW = 92;
const johnH = 1.95;
const markBMI = markW / markH ** 2;
const johnBMI = johnW / johnH ** 2;

const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);
