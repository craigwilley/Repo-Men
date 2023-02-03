//Class with default parameters

class WithDefaultParams {
    constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}
var better = new WithDefaultParams();
better.calculate();

// Test Scripts
const a = 10;
const b = 5;
if(a == 7 || b == 5) {
    console.log("Green");
} else {
    console.log("Blue");
}


//

var x = 2;
x += 5;
console.log(x);

//
var x = 23.2;
console.log(typeof x);


var x = 20;

if(x < 5) {
    console.log("Apple");
} else if(x > 10 && x < 20) {
    console.log("Pear");
} else {
    console.log("Orange");
}


var result = 0;

var i = 4;
while(i > 0) {
    result += 2;
    i--;
}

console.log(result);


try {
    throw new Error();
    console.log('Square');
} catch(err) {
    console.log('Circle');
}


// function(a,b) {
//     return a + b
// }

var car = { mileage: 200 }
var carMileage = 100
console.log(car.mileage)

var veggies = []
veggies.push('parsley')
veggies.push('carrot')
console.log(veggies[2])


function addFive(val) {
    return val + 5;
};
module.exports = addFive;