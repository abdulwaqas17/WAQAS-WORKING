// ------- game 'guess the number' -------
let gameNumber = 2;

let userGuess = prompt('Guess the Number between 1 to 10');

// ------------ condition ------------
while (gameNumber != userGuess){

    userGuess = prompt('You have guessed wrong number ☹, Guess Again!');

}

alert('Congratulation 🎉, You have guessed a correct number 🤩');