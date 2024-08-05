const choices = ["rock","paper","scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const PSD = document.getElementById("PSD");
const CSD = document.getElementById("CSD");

let playerScore = 0;
let computerScore = 0;

function playGames(playerChoice){

    const computerChoice = choices[Math.floor(Math.random()*3)];
    let result = "";

    if(playerChoice===computerChoice){
        result = "IT'S A TIE";
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice==="scissors") ? "YOU WIN!":"YOU LOSE!";
                break;

            case "paper":
                result = (computerChoice==="rock")? "YOU WIN!":"YOU LOSE!";
                break;
            
            case "scissors":
                result = (computerChoice==="paper")? "YOU WIN!":"YOU LOSE!";
                break;
        }
    }
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;
    resultDisplay.classList.remove("GT", "RT");
    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("GT");
            playerScore++;
            PSD.textContent = playerScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("RT");
            computerScore++;
            CSD.textContent = computerScore;
            break;
    }


}
