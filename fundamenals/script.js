`use strict`;

/* let hasDriversLicense = false;
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



function cutFruitPiecees(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPiecees(apples);
    const orangePieces = cutFruitPiecees(oranges);

    const juice = `Juice with ${applePieces} pices of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));
*/
const calcAge = function (birthYear) {
    return 2020 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    const message = `You have already retired`;

    if (retirement > 0) {
        console.log(`${firstName} will retire in ${retirement} years.`)
    }
    else {
        console.log(`${firstName} has already retired ${-retirement} years ago.`)
    }
}

yearsUntilRetirement(2002, `Matthew`);
yearsUntilRetirement(1950, `John`);
