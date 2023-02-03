const prompt=require("prompt-sync")({sigint:true});

/*
// Truthy and Falsy
//A string is false if it is empty.
if(`0`){
    console.log(`The value is true`)
}else{
    console.log(`The value is false`)
}


// if else - else if
let state =`FL`;
let taxPercent;

if (state === `FL`){
    taxPercent = 7;
}else if (state === `NY`){
    taxPercent=8.875;
} else {
    taxPercent = 0;
}

console.log(taxPercent);

//ternary operator. -  (condition) ? true-statement : false statement;

price= 9
let message = (price > 10) ? `expensive` : `cheap`;
console.log(message);

//for loops
for(let i = 0; i<3; i++){
    console.log(i);
}

//checking to see if I can still log backwards

console.log(`Backwards name print:`)
let name = `harrison`;
let backwards =``;
for(let i = name.length-1; i >= 0; i--){
    backwards += name[i];
}
console.log(backwards);

//while loops
console.log(`while loops`)
let count =1;
while(count<5){
    console.log(count);
    count++;
}

//do while loops
console.log(`do while loops`)
let count1 = 1;
do {
    console.log(count1);
    count1++;
} while (count1 < 5);

//challenge on loops
console.log(`myCount`)
let myCount=5;
while(myCount){
    console.log(myCount);
    myCount--;
}

console.log(`first and second`)
if(5>=5){
    console.log(`first`);
}else{
    console.log(`second`);
}

console.log(`third challenge`)
for(let i=0; i<=5; i++){
    console.log(i);
}



const age = 5;
const isOldEnough = age >= 16;
const yearsLeft = (16-age);

if(isOldEnough){
    console.log(`You are old enough to drive`)
}else{
    console.log(`You still have ${yearsLeft} years left till you can drive`)
}
*/

let bmiMark = 28.3;
let bmiJohn = 30.9;

if(bmiMark >= bmiJohn){
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`)
}else{
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})`)
}


