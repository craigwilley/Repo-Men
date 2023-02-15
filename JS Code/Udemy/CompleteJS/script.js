/*let js = `amazing`;
console.log(40+8+23-10);

console.log(`slacker`);
console.log(23);

let firstName =`Shawn`;
console.log(firstName);
let lastName=`Sheep`;
console.log(firstName, lastName);

let country =  `USA`;
let continent = `North America`;
let population = 333100000;

console.log(country, continent, population);

let isIsland = false;
let language = ``;

console.log(isIsland, population, country, language);

//const language = `English`;
//language = `spanish`;

//population = population / 2;
population = population + 1;
console.log(population);
if(population > 330000000) console.log ("More people than the average country");
else console.log("Fewer people than the average country");

console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

let isFun = true;
console.log(isFun);

console.log(typeof true);
console.log(typeof isFun);
console.log(typeof 23);
console.log(typeof `Howdy`);

isFun = `Yes!`;
console.log(typeof isFun);

let year;
console.log(year);
console.log(typeof year);
year=1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear=1991;

var job = `programmer`;
job = `teacher`

lastName=`Barnes`;
console.log(lastName);

year=2037;
const ageJane = year - 1991;
console.log(ageJane);

const ageBob = year-2018;
console.log(ageBob*2, ageJane/10, 2**3);

let x = 10 + 5
x += 10
x *= 4
x++
x--
x--
console.log(x)

//Comparison Operators
console.log(12 >= 2);


//coding challenge 1

let p1Weight = 78;
let p1Height = 1.69;
let p2Weight = 92;
let p2Height = 1.95;

let BMI1 = p1Weight / (p1Height ** 2);
console.log (BMI1);

let BMI2 = p2Weight / (p2Height ** 2);
console.log (BMI2);

if(BMI1 > BMI2){
    console.log(`Mark has the higher BMI`)
}else {
    console.log(`Mark has the lower BMI`)
}


let firstName = `Harry`
let job = `Banker`
const birthYear = 1991
let curYear = 2022

var message = `I'm ${firstName}, \nI am ${curYear - birthYear} years old. \nA ${job} by trade. `
console.log(message)

var message2 = `I'm ${firstName}, 
I am ${curYear - birthYear} years old. 
A ${job} by trade. `
console.log(message2)
*/

// Run the following command from NPM
//"npm install prompt-sync"
const prompt = require("prompt-sync")({ sigint: true });
/*const driveAge = 16
const age = prompt(`Please enter your age `)
const isOldEnough = age >= 16

if(isOldEnough){
    console.log(`You are old enough to drive.`)
}else{
    console.log(`You are not old enough to drive. You still have ${driveAge - age} left before you can drive.`)
}


const inputYear = `2023`;
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 10);

console.log(typeof NaN);

console.log(String(23),23);

// Type Coercion

console.log(`I am ` + 23 + ` years old`)
console.log(`23` - `10`);

let n = Number`1` + 1;
n = n - 1;
console.log(n);

//Truthy and Falsy
// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(`name`));
console.log(Boolean(``));

const money = 0;
if(money){
    console.log(`Don't spend it all!`);
}else{
    console.log(`You need to get a job.`)
}

let height = 9;
if(height){
    console.log(`Yay! Height is defined`);
}else{
    console.log(`Height is Undefined`)
}



//Equality Operators: == vs ===

const age = 18;
if(age === 18) console.log(`You are now an adult`);

// === is the strict equality / == is the lose equality operator
// the == does type coercion
// the === does not do any type coercion


const favorite = Number(prompt("What is your favorite number? "));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
  console.log(`Cool! 23 is an amazing number`);
} else if (favorite === 7) {
  console.log(`7 is also a great number`);
} else if (favorite === 9) {
  console.log(`9 is also a great number`);
} else {
  console.log(`Sorry, your number is not 7, 9, or 23`);
}

if (favorite !== 23) console.log(`Why not 23?`);

//Boolean logic
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const isTired = true;
console.log(hasDriversLicense && hasGoodVision && !isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log(`Sara is able to drive!`);
} else {
  console.log(`Someone else should drive`);
}


// Coding Challenge 3
let dolphinScore1 = prompt(`Enter the first Dolphin score. `);
let dolphinScore2 = prompt(`Enter the second Dolphin score. `);
let dolphinScore3 = prompt(`Enter the third Dolphin score. `);

let koalaScore1 = prompt(`Enter the first Koala score. `);
let koalaScore2 = prompt(`Enter the second Koala score. `);
let koalaScore3 = prompt(`Enter the third Koala score. `);

function averages(score1, score2, score3) {
  let calculation = (score1 + score2 + score3) / 3;
  console.log(`The average score is ` + calculation);
  return calculation;
}

let dolphinFinal = averages(
  Number(dolphinScore1),
  Number(dolphinScore2),
  Number(dolphinScore3)
);
let koalaFinal = averages(
  Number(koalaScore1),
  Number(koalaScore2),
  Number(koalaScore3)
);

console.log(dolphinFinal);
console.log(koalaFinal);

if (dolphinFinal > koalaFinal && dolphinFinal >= 100) {
  console.log(`The Dolphins are the winner!`);
} else if (dolphinFinal > koalaFinal && dolphinFinal <= 100) {
  console.log(`Dolphins did not meet the minimum score of 100`);
} else if (koalaFinal > dolphinFinal && koalaFinal >= 100) {
  console.log(`The Koalas are the winner!`);
} else if (koalaFinal > dolphinFinal && koalaFinal <= 100) {
  console.log(`Koalas did not meet the minimum score of 100`);
} else if ((dolphinFinal = koalaFinal)) {
  console.log(`It is a tie !`);
} else {
  console.log(`Can't figure out the final score.`);
}

*/
//Switch Statement

const day = prompt(`Enter a day of the week: `);

switch (day) {
  case `monday`:
    console.log(`Today is Monday.`);
    break;
  case `tuesday`:
    console.log(`Today is Tuesday.`);
    break;
  case `wednesday`:
    console.log(`Today is Wednesday.`);
    break;
  case `thursday`:
    console.log(`Today is Thursday`);
    break;
  case `friday`:
    console.log(`Today is Friday`);
    break;
  case `saturday`:
  case `sunday`:
    console.log(`It's the weekend.`);
    break;
  default:
    console.log(`Not a valid day of the week.`);
}
