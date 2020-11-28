"use strict";

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


const calcAverage = (a, b, c) => (a + b + c) / 3;

const avgDolphins = calcAverage(404, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win 🏆 ${avgDolphins} vs ${avgKoalas}`);
    }
    else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win 🏆 ${avgKoalas} vs ${avgDolphins}`);
    }
    else {
        console.log(`No one wins 😓`)
    }
}

checkWinner(avgDolphins, avgKoalas);


const calcAge = function (birthYear) {
    console.log(2020 - birthYear);
}
const years = [1990, 1967, 2002, 2010, 2019];

for (let n = 0; n < 6; n++) {
    calcAge(years[n]);
}


const friends = [`Michael`, `Jordan`, `Matthew`];
console.log(friends);

friends.push(`Jay`);
console.log(friends);

friends.unshift(`Steve`);
console.log(friends);

friends.pop();
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf(`Matthew`));

console.log(friends.includes(`Matthew`))



const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.3;
}

const bills = [125, 555, 44];
console.log(bills)
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips)
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total)


const jonaArray = [
    `Kyrylo`,
    `Lvov`,
    2020 - 2002,
    `Developer`
];
*/
const kyrylo = {
    firstName: `Kyrylo`,
    lastName: `Lvov`,
    birthYear: 2002,
    job: `Developer`,
    hasDrivingLicense: false,

    calcAge: function () {
        this.age = 2020 - this.birthYear;
        return this.age;
    }
};

console.log(kyrylo.age);

