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

//Object Literals and the Dot notation
