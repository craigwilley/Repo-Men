//Main.js is for java script code.


var num1 = 2;
var num2 = 5;
var test1 = num1 %2;
var test2 = num2 %2;
var result1 = test1 === 0;
var result2 = test2 === 0;

console.log("Is", num1, "an even number ?", result1);
console.log("Is", num2, "an even number ?",result2);

console.log(5+10);

var now = "Now in ";
var three = 3;
var d = "D!"
console.log(now + three + d);

var counter = 0;
counter += 5;
counter += 3;
console.log(counter);

// if else
var result = 50;

if(result > 40){
    console.log("Congratulations, You passed the test!")
} else {
    console.log("Sorry, You did not pass the test")
}

// if, else if, else

var place = "last";

if(place == "first"){
    console.log("Gold")
}else if (place == "second"){
    console.log("Silver")
}else if (place == "third"){
    console.log("Bronze")
}else{
    console.log("No Medal")
}

//switch statement
var place = "third";

switch(place){
    case "first":
        console.log("Gold");
        break;
    case "second":
        console.log("Silver");
        break;
    case "third":
        console.log("Bronze");
        break;
    default:
        console.log("No Medal");
}

//switch statement 2
var light = "green";

switch(light) {
    case 'green':
        console.log("Drive");
        break;
    case 'orange':
        console.log("Get ready");
        break;
    case 'red':
        console.log("Don't drive");
        break;
    default:
        console.log('The light is not green, orange, or red');
        break;
}

// if else age checker
var age = "abc";
if(age >=65){
    console.log("You get your income from your pension")
}else if(age < 65 && age >=18){
    console.log("Each month you get a salary")
}else if(age < 18){
    console.log("You get an allowance")
}else{
    console.log("The value of the age variable is not numerical")
}

//Days of the week switch statement
var day = "Wednesday"

switch(day){
    case "Monday":
        console.log("Monday is the first day of the week");
        break;
    case "Tuesday":
        console.log("Tuesday is the second day of the week");
        break;
    case "Wednesday":
        console.log("Wednesday is the third day of the week");
        break;
    case "Thursday":
        console.log("Thursday is the fourth day of the week");
        break;
    case "Friday":
        console.log("Friday is the fifth day of the week");
        break;
    case "Saturday":
        console.log("Saturday is the sixth day of the week");
        break;
    case "Sunday":
        console.log("Sunday is the seventh day of the week");
        break;
    default:
        console.log("That is not a day of the week");
        break;
}

//For Loop
for(var i = 0; i <= 5; i++) {
    console.log("Hello");
}

// New Code
var i = 3;
var j = 5;

if(i == 3 && j < 5) {
    console.log("Hello");
} else {
    console.log("Goodbye");
}

var i = 7;
var j = 2;

if(i < 7 || j < 5) {
    console.log("Hello");
} else {
    console.log("Goodbye");
}

//For loop
for(var i = 1; i<6; i++){
    console.log(i)
}
console.log('Counting completed!')

//Cube Length
var cubes = 'ABCDEFG';

for (var i = 0; i < 7; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}


function reverseString(str) {
    // Step 1. Create an empty string that will host the new created string
    var newString = "";

    // Step 2. Create the FOR loop
    /* The starting point of the loop will be (str.length - 1) which corresponds to the
       last character of the string, "o"
       As long as i is greater than or equals 0, the loop will go on
       We decrement i after each iteration */
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i]; // or newString = newString + str[i];
    }
    /* Here hello's length equals 5
        For each iteration: i = str.length - 1 and newString = newString + str[i]
        First iteration:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
        Second iteration:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
        Third iteration:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
        Fourth iteration:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
        Fifth iteration:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
    End of the FOR Loop*/

    // Step 3. Return the reversed string
    return newString; // "olleh"
}

reverseString('hello');

//Another For Loop with if/else
for(var i = 1; i <= 10; i++){
    if (i==1){
        console.log("Gold Medal")
    }else if(i==2){
        console.log("Silver Medal")
    }else if(i==3){
        console.log("Bronze Medal")
    }else{
        console.log(i)
    }
}

//Another For Loop with switch
for(var i = 1; i <= 10; i++) {
    switch (i) {
        case(1):
            console.log("Gold Medal");
            break;
        case(2):
            console.log("Silver Medal");
            break;
        case(3):
            console.log("Bronze Medal");
            break;
        default:
            console.log(i);
            break;
    }
}

//Palindrome
var forward = "toot";
var backward = "";

for(var i = forward.length-1; i>=0; i--){
    backward += forward[i];
}

if(forward==backward){
    console.log("Yes, it is a palindrome")
}else{console.log("No, it is not a palindrome")};



//Letter Finder
function letterFinder(word,match){
    for(var i=0; i < word.length; i++){
        if(word[i]==match){
            console.log("Found the", match, "at", i)
        }else{
            console.log("---No match found at ", i)
        }
    }
}

letterFinder("test", "t");


//reverse string
var str = "Hello this is a new string";
var reverse = "";
 for(var i = str.length-1;i>=0;i--){
  reverse += str[i];}
console.log(reverse);

//Math Random Examples
Math.random();
var decimal = Math.random();
console.log(decimal);
console.log(decimal*10);

//For loop over arrays
var letters = ["a", "b", "c"];
for(var i=0; i<letters.length; i++){
    console.log(letters[i]);
}

//For loop over strings
var letters = "abc";
for(var i=0; i<letters.length; i++){
    console.log(letters[i]);
}

// Iterable Arrays
var veggies = ["onion", "parsley", "carrot"];
console.log(veggies.length);

console.log(veggies[0]);
console.log(veggies[1]);

for(var i=0; i < veggies.length; i++){
    console.log(veggies[i]);
}

// Iterable Strings

var greeting = "Howdy";
console.log(greeting.length);
console.log(greeting[0]);
console.log(greeting[1]);
for(var i = 0; i < greeting.length; i++){
    console.log(greeting[i]);
}

// Strings are not the same as arrays
var greet = "Hello ";
var user = "Lisa";

//console.log(greet.pop()); //DOES NOT WORK String and arrays are different

console.log(greet + user);
console.log(greet.concat(user));

// Objects and Array Practice
var clothes =[];
clothes.push("Shirt", "Hat", "Pants", "Belt", "Socks");
console.log(clothes);
clothes.pop(4);
console.log(clothes);
console.log(clothes[2]);

const favCar = {
    color: "Blue",
    convertible: false,
};
favCar.mileage=66565; //Update with dot notation
console.log(favCar);

// Type of examples
// var test = typeof("what is this");
// var test = typeof(10);
// var test = typeof(3.14);
// var test = typeof(true);
//var test = typeof(false);
// var test = typeof(1 < 2);
// var test = typeof([1,2,3]);
// var test = typeof({firstProperty: 1});
var test = typeof(function abc(){console.log("abc");});
console.log(test)


var dog = {
    color: "brown",
    height: 30,
    length: 60
};
dog["type"] = "corgi";

console.log(dog);

//Error Prevention exercise
function addTwoNums(a,b) {
    try {
        if(typeof(a) != "number") {
            throw new ReferenceError("The First argument is not a number.")
        }else if(typeof(b) != "number"){
            throw new ReferenceError("The Second argument is not a number")
        }else{
            console.log(a+b);
        }
    } catch (err) {
        console.log("Error!", err)
    }
}
addTwoNums("5", 5);
console.log("It Still Works")

//Defensive Programming
function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2;
    var condition2 = typeof(match) == 'string' && match.length == 1;
    if(condition1 && condition2) {
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else {
        console.log("Please pass correct arguments to the function")
    }
}
letterFinder("cat", "c");

//Building Blocks
try {
    Number(5).toPrecision(300)
} catch(e) {
    console.log("There was an error")
}

//Functional Programming
var currencyOne=100;
var currencyTwo=0;
var exchangeRate=1.2;

function convertCurrency(amount, rate){
    return amount * rate;
}

currencyTwo = convertCurrency(currencyOne, exchangeRate);

console.log(currencyTwo);

// Functional Programing 2
var globalVar = 77;

function scopeTest() {
    var localVar = 88;
}

//console.log(localVar);

//Functional Programing 3
function meal(animal) {
    animal.food = animal.food + 10;
}

var dog = {
    food: 10
};
meal(dog);
meal(dog);

console.log(dog.food);

//Functional Programming 4

function two() {
    return 2;
}

function one() {
    return 1;
}

function calculate(initialValue, incrementValue) {
    return initialValue() + incrementValue() + incrementValue();
}

console.log(calculate(two, one));

//OOP Introduction
var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function(){
        var calculation = purchase1.shoes * purchase1.stateTax;
        console.log("Total Price: ", calculation);
    }
}

purchase1.totalPrice();
purchase1.shoes = 200;
purchase1.totalPrice();

var purchase2 = {
    shoes:50,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = purchase2.shoes * purchase2.stateTax;
        console.log("Total price: ", calculation)
    }
}

purchase2.totalPrice();

//Using the "This" Object
var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice:  function() {
        var calculation = this.shoes * this.stateTax;
        console.log("Total Price: ", calculation)
    }
}

//Functional Programming shoes example.

var shoes = 100;
var stateTax = 1.2;

function totalPrice(shoes,tax){
    return shoes * tax;
}

var toPay = totalPrice(shoes, stateTax);
console.log("Total Price: " + toPay);

//OOP
var purchase1={
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function(){
        var calculation = purchase1.shoes * purchase1.stateTax;
        console.log("Total Price: ", calculation);
    }
}
purchase1.totalPrice();

//OOP 2
var purchase2 = {
    shoes:50,
    stateTax: 1.2,
    totalPrice: function(){
        var calculation = purchase2.shoes * purchase2.stateTax;
        console.log("Total Price: ", calculation);
    }
}
purchase2.totalPrice();

//OOP 3: this
var purchase1 ={
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function(){
        var calculation = this.shoes * this.stateTax;
        console.log("Total Price: ", calculation);
    }
}
purchase1.totalPrice();

var purchase2 = {
    shoes:50,
    stateTax: 1.2,
    totalPrice: function(){
        var calculation = this.shoes * this.stateTax;
        console.log("Total Price: ", calculation);
    }
}
purchase2.totalPrice();

//Classes
class Car {
    constructor(color, speed) {
        this.color = color;
        this.speed = speed;
    }
//The Turbo On is a method inside of the class
    turboOn(){
        console.log("The Turbo is ON!")
    }
}
const car1 = new Car("red", 120);
car1.turboOn();

//OOP Principles
class Animal {/* ...class code goes here...*/}
var myDog = Object.create(Animal)
console.log(Animal)

// Class Inheritance (taking properties from the Super-Class)
class Animals {/*...class code goes here...*/}
class Bird extends Animals{/*...class code goes here...*/}
class Eagle extends Bird {/*...class code goes here...*/}

//Encapsulation (Hiding the code that doesn't matter)
let characters = "abc";
characters = characters.toUpperCase();
console.log(characters);

//Polymorphism
const bicycle = {
    bell: function(){
        return "Ring, Ring! Watch your butt"
    }
}
const door = {
    bell: function(){
        return "Ring, Ring! Let me in sucka"
    }
}

bicycle.bell();
door.bell();

function ringTheBell(thing) {
    console.log(thing.bell())
}

ringTheBell(bicycle);
ringTheBell(door);

// Example of Polymorphism in classes
class Birds {
    useWings() {
        console.log("Flying!")
    }
}
class Eagles extends Birds {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguins extends Birds {
    useWings() {
        console.log("Diving!")
    }
}
var baldEagle = new Eagles();
var kingPenguin = new Penguins();
baldEagle.useWings();
kingPenguin.useWings();

//Constructors
console.log(Math.pow(2,5));
console.log(new Date());

function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}
let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");
console.log(kiwiIcecream);
console.log(appleIcecream);

let apple = new String("apple");
console.log(apple);

let pear = "pear";
console.log(pear);

//Regular Expressions
new RegExp;
console.log("abcd".match(/d/));
console.log("abcd".match(/a/));

//Inheritance
var bird = {
    hasWings: true,
    canFly: true,
    hasFeathers: true
}

var eagle1 = Object.create(bird);
console.log("eagle1: ", eagle1);

console.log("eagle1 has wings: ", eagle1.hasWings);
console.log("eagle1 can fly: ", eagle1.canFly);
console.log("eagle1 has feathers: ", eagle1.hasFeathers);

var eagle2 = Object.create(bird);
console.log("eagle2 has wings: ", eagle2.hasWings);

var penguin1 = Object.create(bird);
penguin1.canFly=false;
console.log("penguin1 can fly: ", penguin1.canFly);

// Can I still print a name backwards
// Yes I can BOOM
var forwardString = "Hello";
var backwardString = "";

for(var i = forwardString.length-1; i>0;i--){
    backwardString += forwardString[i]
}
console.log(backwardString);

//I am going to end this file here and make a new .CompleteJS file that has the content sorted by weeks of the meta course.


