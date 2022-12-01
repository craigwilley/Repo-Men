/*//Extending classes using basic inheritance
class Train{
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
}
new Train();
var myFirstTrain = new Train("red", false);
console.log(myFirstTrain);
var mySecondTrain = new Train("blue", false);
var myThirdTrain = new Train("blue", false);
console.log(mySecondTrain);
console.log(mySecondTrain);
*/
//Extending classes with constructors
class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}
var train4 = new Train("red", false);
console.log(train4.toggleLights());
console.log(train4.lightsStatus());
train4.getSelf();
train4.getPrototype();
console.log(train4);


class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}

var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);
console.log(train5.toggleLights());
console.log(train5.lightsStatus());
console.log(train5.getPrototype());
console.log(highSpeed1.getPrototype());

//Class constructor property
class StationaryBike {
    constructor(position, gears) {
        this.position = position
        this.gears = gears
    }
}

class Treadmill {
    constructor(position, modes) {
        this.position = position
        this.modes = modes
    }
}

class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8)
        this.treadmill = new Treadmill(treadmillPos, 5)
    }
}

var boxingGym = new Gym("7-22", "right corner", "left corner")

console.log(boxingGym.openHrs)
console.log(boxingGym.stationaryBike)
console.log(boxingGym.treadmill)

//Default parameters inside of functions
function noDefaultParams(number){
    console.log("Result: ", number * number);
}
noDefaultParams(); // Returns Not a Number

//Improvements using Default Params inside of function
function withDefaultParams(number=10){
    console.log("Result: ", number * number)
}
withDefaultParams();

//Default argument values
class NoDefaultParams{
    constructor(num1, num2, num3, string1, bool1){
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate(){
        if(this.bool1){
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect."
    }
}

//Designing an OO Program
class Animal {
    constructor(color = 'yellow', energy = 100) {
        this.color = color;
        this.energy = energy;
    }
    isActive() {
        if(this.energy > 0) {
            this.energy -= 20;
            console.log('Energy is decreasing, currently at:', this.energy)
        } else if(this.energy == 0){
            this.sleep();
        }
    }
    sleep() {
        this.energy += 20;
        console.log('Energy is increasing, currently at:', this.energy)
    }
    getColor() {
        console.log(this.color)
    }
}

class Cat extends Animal {
    constructor(sound = 'purr', canJumpHigh = true, canClimbTrees = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canClimbTrees = canClimbTrees;
        this.canJumpHigh = canJumpHigh;
    }
    makeSound() {
        console.log(this.sound);
    }
}

class Bird extends Animal {
    constructor(sound = 'chirp', canFly = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }
    makeSound() {
        console.log(this.sound);
    }
}

class HouseCat extends Cat {
    constructor(houseCatSound = "meow", sound,canJumpHigh,canClimbTrees, color,energy) {
        super(sound,canJumpHigh,canClimbTrees, color,energy);
        this.houseCatSound = houseCatSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.houseCatSound);
    }
}

class Tiger extends Cat {
    constructor(tigerSound = "Roar!", sound,canJumpHigh,canClimbTrees, color,energy) {
        super(sound,canJumpHigh,canClimbTrees, color,energy);
        this.tigerSound = tigerSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.tigerSound);
    }
}


class Parrot extends Bird {
    constructor(canTalk = false, sound,canFly, color,energy) {
        super(sound,canFly, color,energy);
        this.canTalk = canTalk;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        if (this.canTalk) {
            console.log("I'm a talking parrot!");
        }
    }
}

var fiji = new Parrot(false);
var polly = new Parrot(true);

fiji.makeSound();
fiji.makeSound(true);

polly.makeSound();
polly.makeSound(true);

polly.color;
polly.energy;

polly.isActive();

var penguin = new Bird("shriek", false, "black and white", 200); // setting all the custom properties
penguin;

penguin.sound;
penguin.canFly;
penguin.color;
penguin.energy;
penguin.isActive();

var leo = new HouseCat();

// leo, no purring please:
leo.makeSound(false);
// leo, both purr and meow now:
leo.makeSound(true);

var cuddles = new Tiger();
cuddles.makeSound(false);
cuddles.makeSound(true);

//Building an OO Program Lab
class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep(){
        this.energy += 10;
    }
    doSomethingFun(){
        this.energy -= 10;
    }
}

class Worker extends Person {
    constructor(name, age, energy, xp = 0, hourlyWage = 10) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    goToWork(){
        this.xp += 10;
    }
}

function intern(){
    var Bob = new Worker("Bob", 21, 110, 0, 10);
    Bob.goToWork();
    return Bob;
}
intern();

function manager(){
    var Alice = new Worker("Alice", 30, 120, 100, 30);
    Alice.doSomethingFun();
    return Alice;
}
manager();

// OOP
class Cake {
    constructor(lyr) {
        this.layers = lyr + 1;
    }
}

var result = new Cake(1);
console.log(result.layers);

//OOP 2

class Animal1 {
    constructor(lg) {
        this.legs = lg;
    }
}

class Dog extends Animal1 {
    constructor() {
        super(4);
    }
}

var result = new Dog();
console.log(result.legs);

//OOP 3

class Animal3 {

}

class Cat1 extends Animal3 {
    constructor() {
        super();
        this.noise = "meow";
    }
}

var result = new Animal3();
console.log(result.noise);

//OOP 4
class Person1 {
    sayHello() {
        console.log("Hello");
    }
}

class Friend extends Person1 {
    sayHello() {
        console.log("Hey");
    }
}

var result = new Friend();
result.sayHello();

//For loops and object
var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( key of Object.keys(clothingItem) ) {
    console.log(key, ":", clothingItem[key])
}

//Dynamic Access
function testBracketsDynamicAccess() {
    var dynamicKey = Math.random() > 0.5 ? "speed" : "color";

    var drone = {
        speed: 15,
        color: "orange"
    }

    console.log(drone[dynamicKey]);
}
testBracketsDynamicAccess();

//For of loops and objects
const car1 ={
    engine: true,
    steering: true,
    speed: "slow"
}
const sportsCar1 = Object.create(car1);
sportsCar1.speed = "fast";
console. log ("The sportsCar object: ", sportsCar1);

console.log('----- for-in is unreliable -----');
    for (prop in sportsCar1) {
    console.log(prop);
    }
    console.log("Iterating over object AND its prototype!");
    console.log('----- for-of is reliable -----');
    for (prop of Object.keys(sportsCar1)) {
        console.log(prop + ": " + sportsCar1 [prop]);
    }
        console.log("Iterating over object's OWN PROPERTIES only!");
// For loops and objects no comments
const car = {
    engine: true
}
    const sportsCar = Object.create(car);
    sportsCar.speed = "fast";
    console.log("The sportsCar object: ", sportsCar);
    for (prop in sportsCar){
    console.log(prop);
}
for (prop of Object.keys(sportsCar)) {
    console.log(prop + ": " + sportsCar[prop]);
}

//variable interpolation
let greet = "Hello";
let place = "World";
console.log(`${greet} ${place} !`)
console.log(`${1 + 1 + 1 + 1 + 1} stars!`)

//multi-line template literals
let multiline = `
Using 
backticks,
allows
for
multi-line
strings!
`;
console.log(multiline);

//Template Literals Variables
let first = `He said, "Don't you know? Backticks, allow for cool features!`;
let second = `"Wouldn't you like to learn more ?", he asked.`;
console.log(`${first} 
- and I get curious. 
${second}`);

//Iterate over an array
