"use strict";
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

//Switch statement as a logical operator

let day = `monday`;
if (day === `monday`) {
  console.log(`today is monday`);
} else if (day === `tuesday`) {
  console.log(`today is tuesday`);
} else {
  console.log(`not one of the first days of the week`);
}


// Conditional and ternary operator

const age = 18;
age >= 18
  ? console.log(`I am old enough to vote`)
  : console.log(`I am not old enough to vote`);

const vote = age >= 18 ? true : false;
console.log(vote);

console.log(`I am old enough to vote: ${vote}`);


//Coding challenge 4

let bill = prompt(`Please enter the total price of the meal: `);
Number(bill);
let tip = Number(bill) >= 50 && Number(bill) <= 300 ? 0.15 : 0.2;
let total = Number(bill) + Number(bill * tip);
console.log(
  `The bill was: ${total}. The original bill was ${bill} with a tip percentage of ${tip} and a tip of ${
    total - bill
  }`
);




//Part two (we added the 'use strict' to the first line of the page.

let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive.`);

const interfaces = `Audio`;
console.log(interfaces);


// Functions
function logger(name) {
  console.log(`My name is ` + name);
}
//calling / running / invoking the function
logger(`Bob`);
logger(`Sally`);

logger(`Hary Potter`);
logger(`Fred Flintstones`);

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 3);
console.log(appleJuice);
console.log(fruitProcessor(5, 3));

const appleOrangeJuice = fruitProcessor(2, 5);
console.log(appleOrangeJuice);




function calcAge1(birthYear) {
  return 2037 - birthYear;
}

console.log(calcAge1(1988));
const age1 = calcAge1(1988);
const calcAge2 = function (birthYear) {
  return 2050 - birthYear;
};
const age2 = calcAge2(1988);
console.log(age1, age2);

//Arrow functions

const calcAge3 = (birthYear) => 2037 - birthYear;
console.log(calcAge3(1998));



function cutFruitPieces(fruit) {
  return fruit * 3;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));



const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired.`);
    return -1;
  }
};
console.log(yearsUntilRetirement(1991, `Bob`));
console.log(yearsUntilRetirement(1970, `Mike`));

//Function declaration (Function that can be used before it is declared (hoisted)

function calcAge(birthYear) {
  return 2037 - birthYear;
}

// Function expression (Function value stored in a variable)
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

// Arrow function ( great for quick one line functions has no "this" keyword
const calcAge = (birthYear) => 2037 - birthYear;



const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = function (avgKoala, avgDolphin) {
  if (avgKoala >= 2 * avgDolphin) {
    console.log(`Koalas are the winner with a score of ${avgKoala}.`);
  } else if (avgDolphin >= 2 * avgKoala) {
    console.log(`Dolphins are the winner with a score of ${avgDolphin}.`);
  } else {
    console.log(`The final score was not double the other team.`);
  }
};

let avgKoala = calcAverage(65, 54, 49);
let avgDolphin = calcAverage(44, 23, 71);

checkWinner(avgKoala, avgDolphin);

avgKoala = calcAverage(23, 34, 27);
avgDolphin = calcAverage(85, 54, 41);
checkWinner(avgKoala, avgDolphin);



// Arrays

const friends = [`michael`, `stephen`, `peter`];
console.log(friends);

const years = new Array(1991, 1984, 1999, 2008, 2020);
console.log(years);

console.log(friends[0], friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = `john`;
console.log(friends);

const firstName = `fred`;
const values = [firstName, friends, `wilson`, 3033 - 1988];
console.log(values);

// array practice
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

for (let i = 0; i <= years.length - 1; i++) {
  const ages = calcAge(years[i]);
  console.log(ages);
}


// push to the end of an array
const friends = [`Sulley`, `Mike`, `Sylvia`];
friends.push(`Waternoose`);
console.log(friends);
friends.unshift(`Roz`);
console.log(friends);
const gone1 = friends.pop();
const gone2 = friends.pop();
friends.shift();
console.log(friends);
console.log(gone1, gone2);

console.log(friends.indexOf(`Mike`));

console.log(friends.includes(`Sulley`));

const bill = [125, 555, 44];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const tip = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];

console.log(tip);
const totals = [tip[0] + bill[0], tip[1] + bill[1], tip[2] + bill[2]];
console.log(totals);

// Objects

const person = {
  firstName: `Harry`,
  lastName: `Potter`,
  age: 14,
  birthYear: 1991,
  house: `Gryffindor`,
  profession: `wizard`,
  apparate: true,
  calcAge: function () {
    return 2023 - this.birthYear;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.profession
    } and he ${this.apparate ? `can` : `can't`} apparate`;
  },
};

console.log(person);
console.log(person.house);
console.log(person[`lastName`]);

const nameKey = `Name`;
console.log(person[`first` + nameKey]);
console.log(person[`last` + nameKey]);

const intrestedIn = prompt(
  `What do you want to know about Harry Potter? You can choose between, firstName, lastName, age, job, and friends: `
);

if (person[intrestedIn]) {
  console.log(person[intrestedIn]);
} else {
  console.log(`Wrong Request`);
}

person.location = `hogwarts`;
person[`sex`] = `male`;
console.log(person);

console.log(
  `${person.firstName} has ${friends.length} friends and his best friend is ${friends[0]}`
);

console.log(person.calcAge());
console.log(person[`calcAge`]());

console.log();

console.log(person.getSummary());

const mark = {
  firstName: `Mark`,
  lastName: `Miller`,
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  firstName: `John`,
  lastName: `Smith`,
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

if (john.bmi > mark.bmi) {
  console.log(
    `${john.firstName}'s BMI (${john.bmi}) is higher than ${mark.firstName}'s (${mark.bmi}) !`
  );
} else {
  console.log(
    `${mark.firstName}'s BMI (${mark.bmi}) is higher than ${john.firstName}'s (${john.bmi}) !`
  );
}
*/
