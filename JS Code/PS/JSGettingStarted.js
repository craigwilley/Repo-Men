const prompt=require("prompt-sync")({sigint:true});

/*
//Symbols
let mySymbol = Symbol();


//Objects
let person = {
    name: "Harry",
    age: 56,
    partTime: false,
    [mySymbol]: `secretInformation`,
    // Object Methods
    showInfo: function(){
        console.log(this.name + ` is ` + this.age);
    }
}

console.log(person.name);
console.log(person.age);
console.log(person.partTime);

person.age = 33;
console.log(person.age);

person[`age`] = 44;
console.log(person.age);

console.log(person.showInfo());


// Passing objects to functions

let message = `Hello`;

function changeMessage(message){
    console.log(message);
}

changeMessage(`this is the new message`);

// Increment age Function

let person = {
    name: `John`,
    age: 49,
    partTime: false
};

function incrementAge(person){
    person.age++;
    console.log(`Happy Birthday, now you are ` + person.age);
}

incrementAge(person);
*/

let dateNow = new Date();
console.log(dateNow.toDateString() );

