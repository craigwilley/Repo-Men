//This function will be hoisted
/*
c();

//this variable is not and will be undefined

console.log(greet);



var greet = "Hello Jello!";

function b(){
    console.log(greet);
}
function c (){
    console.log(`called function c`);

}

console.log(greet);

// undefined and not defined are not the same errors

var a = 37;
console.log(a);
if (a === undefined){
    console.log(`the variable a is undefined`)
}else{
    console.log(`the variable a is defined`)
}

// More functions

function b(){
    console.log(`Called b!`)
}

b();

console.log(a);
var a = `Hello World`;

console.log(a);
*/

// Global Execution Context
function b(){
}

function a(){
    b();
}

a();

