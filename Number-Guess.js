const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random()*(maxNum-minNum+1));

let attempts = 0;
let guess;
let running = true;

while(running ){

    guess = window.prompt(`Guess the number btw ${minNum} and ${maxNum}`);
    guess = Number(guess);
    if(guess == NaN){
        console.log("Enter a valid number");
    }
    if(guess < minNum || guess>maxNum){
        console.log("Enter the number in range");
    }
    else{
        attempts++;
        if(guess < answer){
            console.log("TO LOW");
        }
        else if(guess>answer){
            console.log("TO HIGH");
        }
        else{
            console.log(`${answer} is correct Bullzai it tooks ${attempts}`);
            running=false;

        }
    }
}