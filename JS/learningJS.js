var age = prompt("How old are you?")

var lastDigit = age[age.length - 1]

var digitalRoot = getDigitialRoot(age)


if(age < 0) {
    console.log("That isn't a valid age...")
} else if(age == 21){
    console.log("Happy 21st! Drink up!")
} else if(age % 2 != 0){
    console.log("Your age is an odd number.")
}

if(isSquare(age)){
    console.log("Your age is a perfect square")
}

console.log(Math.sqrt(age))

function getDigitialRoot(number){
    var digitalRoot = 0;

    for(var i = 0; i < number.toString().length; i ++){
        //need to parseInt because taking a character from a number makes it a string
        digitalRoot += parseInt(number.toString()[i]);
    }

    if(digitalRoot.toString().length != 1){
        //need to return here because we need to eventually return the value in recursion
        return getDigitialRoot(digitalRoot)
    } else {
        return digitalRoot
    }
}

function isSquare(number){
    if(number < 0){
        return false
    } else {
        return Math.sqrt(number) % 1 === 0
    }
}