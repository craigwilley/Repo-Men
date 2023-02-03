let convertToLiters = function(gallons){
    return gallons * 3.785
}

console.log(convertToLiters(10))

//Function Expression to Arrow FUnction I

const printSum = function (a,b){
    const sum = a+b;
    console.log(sum)
}

printSum(4,7);

//With arrow
const printSums=(a,b) => {
    const sum = a+b;
    console.log(sum)
}

printSums(15, 5)

//with arrow
const convertToLiter = gallon => gallon * 3.785

console.log(convertToLiter(8))

// Arrow functions are not hoisted
// Can not be used for constructor functions
// Can not use the arguments object
// they don't have their own "this" binding

