

let forwardString = `bob`
let backwardString = ``

for(i = forwardString.length-1; i>0; i--){
    backwardString += forwardString[i]
}
console.log(backwardString);

if(forwardString = backwardString){
    console.log(`Congratulations, your sting is a palindrome`)
}else{
    console.log(`The string is not a palindrome`)
}