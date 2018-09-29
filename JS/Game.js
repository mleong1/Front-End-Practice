var randomNumber = Math.floor(Math.random()*100);
var gotItRight = false;
//random integer 1-100

while(gotItRight === false){
    var guess = Number(prompt("Guess a number from 1 to 100 to see my page!"));
    //prompts are stored as strings

    //check if guess is right
    if(guess === randomNumber){
        alert("You got it right!");
        gotItRight = true;
    } else if (guess > randomNumber){
        alert("Number is lower.");
    } else {
        alert("Number is higher.");
    }
}

var songChoice = prompt("Select a song to here the lyrics to!");
printSong(songChoice);


function printSong(song){
    if(song === "atm"){
        printATMLyrics();
    } else if (song === "fall"){
        printFallLyrics();
    } else {
        alert("Sorry we only have two rap songs");
    }
}

function printATMLyrics(){
    console.log("I want it in physical, A million dollars, I count up in intervals");
    console.log("Without it I'm miserable, Don't wanna fall off so I'm all in my bag");
}

function printFallLyrics(){
    console.log("Get Earl the Hooded Sweater, Whatever his name is to help you put together");
    console.log("Some words, more than just two letters");
}