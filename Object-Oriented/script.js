'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New empty object is created
// 2. Function is called, this is assigned as new empty object
// 3. Empty object {} linked to prototype
// 4. Function automatically returns {}
