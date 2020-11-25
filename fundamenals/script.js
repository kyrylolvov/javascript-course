`use strict`;

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive`);

function logger() {
    console.log(`My name is Kyrylo`);
}

logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}
const appleJuice = fruitProcessor(5, 2);
console.log(appleJuice);

console.log(fruitProcessor(3, 4));

function calcAge(birthYear) {
    return 2020 - birthYear;
}

const age = calcAge(2002);
console.log(age);

const calcAgeNew = function (birthYear) {
    return 2020 - birthYear;
}
console.log(calcAgeNew(2002));
