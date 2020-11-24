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

console.log(century);
