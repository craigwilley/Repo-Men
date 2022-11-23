//Main.js is for java script code.


var num1 = 2;
var num2 = 5;
var test1 = num1 %2;
var test2 = num2 %2;
var result1 = test1 == 0;
var result2 = test2 == 0;

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