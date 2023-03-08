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


//loops

for (let i = 1; i <= 10; i++) {
  console.log(`Lifting wieghts...Repetition ${i}`);
}

//looping arrays
const friendArray = [`Harry`, `Ron`, `Hermione`, `Albus`, 45, `Fred`];
const types = [];
for (let i = 0; friendArray.length - 1 >= i; i++) {
  console.log(friendArray[i]);
  // types[i] = typeof friendArray[i];
  types.push(typeof friendArray[i]);
}
console.log(types);

const years = [1988, 2007, 1968, 2004];
const ages = [];
for (let i = 0; years.length - 1 >= i; i++) {
  //ages[i] = 2023 - years[i];
  ages.push(2023 - years[i]);
}
console.log(ages);

// continue and break
// console.log(`--ONLY STRINGS--`);
// for (let i = 0; friendArray.length - 1 >= i; i++) {
//   if (typeof friendArray[i] !== `string`) continue;
//   console.log(friendArray[i], typeof friendArray);
// }

// console.log(`--BREAK WITH NUMBER--`);
// for (let i = 0; friendArray.length - 1 >= i; i++) {
//   if (typeof friendArray[i] !== `string`) break;
//   console.log(friendArray[i], typeof friendArray);
// }

//looping backwards
for (let i = friendArray.length - 1; i >= 0; i--) {
  console.log(friendArray[i]);
}



// The while loop
let i = 1;
while (i <= 10) {
  console.log(`Repetition ${i}`);
  i++;
}

// Rolling the dice till 6
let dice = 0;
while (dice !== 6) {
  dice = Math.floor(Math.random() * 6 + 1);
  console.log(`The value of your roll was ${dice}`);
  if (dice === 6) console.log(`You rolled a six, we are ending the loop`);
}


// Coding Challenge #4

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

for (let i = 0; i < bills.length - 1; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tips[i] + bills[i]);
}
console.log(totals);

// Harder Challenge 4

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/

// Challenge 5
/* You work for a company building smart home thermostats.
the most recent task is given a javascript array of temperatures of one day,
calculate the temperature amplitude. Keep in mind that there might be a sensor error.


function calculateTemperatureAmplitude(temperatures) {
  // Remove any outlier values that are more than 3 standard deviations from the mean
  const mean =
    temperatures.reduce((acc, val) => acc + val, 0) / temperatures.length;
  const stdDev = Math.sqrt(
    temperatures.reduce((acc, val) => acc + (val - mean) ** 2, 0) /
      temperatures.length
  );
  const filteredTemperatures = temperatures.filter(
    (val) => Math.abs(val - mean) < 3 * stdDev
  );

  // Find the highest and lowest temperatures in the cleaned array
  const maxTemp = Math.max(...filteredTemperatures);
  const minTemp = Math.min(...filteredTemperatures);

  // Calculate the amplitude and return the result
  const amplitude = maxTemp - minTemp;
  return amplitude;
}


const temperatures = [3, -2, -6, -1, `error`, 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitudeNew = function (t1, t2) {
  const array1 = [`a`, `b`, `c`];
  const array2 = [`d`, `e`, `f`];
  const array3 = array1.concat(array2);

  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

// Merge two arrays and then run the function again


[2, 4, 6, 8].forEach(function (el) {
  console.log(el);
});

const times10 = [2, 4, 6, 8].map(function (el) {
  return el * 10;
});
console.log(times10);

const times100 = [2, 4, 6, 8].map((el) => el * 100);
console.log(times100);


const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const allCategories = CATEGORIES.map((el) => el.name);
console.log(allCategories);

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  if (age >= 0) return age;
  else
    return `That does not compute. The year needs to be less or equal to ${currentYear}`;
}

const factAges = initialFacts.map((el) => calcFactAge(el.createdIn));
console.log(factAges);
console.log(factAges.join("-"));


//Code from the full stack app
factsList.insertAdjacentHTML(`afterbegin`, `<li>Jonas</li>`);
factsList.insertAdjacentHTML(`afterbegin`, `<li>Mike</li>`);


*/
