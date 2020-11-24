const markHeight = 1.69;
const markWeight = 78;
const markIndex = markWeight / (markHeight ** 2);

const johnHeight = 1.88;
const johnWeight = 95;
const johnIndex = johnWeight / (johnHeight ** 2);

let markHeigherBMI = (markIndex > johnIndex);
console.log(markHeigherBMI);
console.log(markIndex, johnIndex, markHeigherBMI);

if (markIndex > johnIndex) {
    console.log(`Mark's BMI is higher!`);
}
else {
    console.log(`John's BMI is higher!`);

}

const firstName = 'Kyrylo';
const job = "Developer";
const birthYear = 2002;
const year = 2020;

const kyrylo = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(kyrylo);
console.log(`Strin with \n
multiple \n
lines`)

const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log(`You can start your driving license 🚗`);
}
else {
    console.log(`You cannot get your deiving license. You need ${18 - age} more years 🔞`)
}

const yearBirth = 1999;
let century;

if (yearBirth <= 2000) {
    century = 20;
}
else {
    century = 21;
}

// type conversion
console.log(century);

const inputYear = `1991`;
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 10);
console.log(String(23), 23);

// type coercion
console.log(`I'm ` + 18 + ` years old.`)
console.log(`23` - `10` - 3);
console.log(`23` / `2`);
console.log(`23` > `18`);

let n = `1` + 1;
console.log(n - 1);

const money = 100;
if (money) {
    console.log(`Don't spend it all!`);
}
else {
    console.log(`You should get a job!`);
}

let height = 10;
if (height) {
    console.log(`Height is defined! 🤩`);
}
else {
    console.log(`Height is undefined 😓`)
}

const myAge = 18;
if (age === 18) console.log(`You just became and adult`);
else console.log(`You are not 18 yet!`);

const favourite = prompt(`What's your favourite number?`);
console.log(favourite);
console.log(typeof favourite);

if (favourite == 23) {
    console.log(`Cool! 23 is an amazing number.`);
} 

const scoreDolphins = (97 + 112 + 81) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log(`Dolphis win the trophy 🏆`)
}
else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
    console.log(`Koalas win the trophy 🏆`)
}
else if (scoreKoalas === scoreDolphins && scoreKoalas >= 100 && scoreDolphins >= 100) {
    console.log(`Both teams win the trophy 🤩`)
}
else {
    console.log(`No one wins the trophy 😓`)
}
