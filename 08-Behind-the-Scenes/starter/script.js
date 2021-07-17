'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    const output = `${firstname}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1991 && birthYear <= 1996) {
      var millenial = true;
      const firstname = 'steven';
      const str = `Oh you're a millenial! ${firstname}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial); //function scope
    //console.log(add(2, 3));
  }
  printAge();
  return age;
}

const firstname = 'jonas';
calcAge(1994);
