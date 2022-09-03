function getComputerChoice() {
    if (Math.floor(Math.random()*3) === 0) {
        return "Rock";
    } else if (Math.floor(Math.random()*3) === 1) {
        return "Paper";
    } else {
        return "Scissor";
    }
}

function playRound(playerSelection, computerSelection) {
    switch (true) {
        case playerSelection.toLowerCase() === computerSelection.toLowerCase():
            return "Draw";
            break;       
        case playerSelection.toLowerCase() === "paper" && computerSelection === "Rock":
            return "You won! Paper beats Rock";
            break;
        case playerSelection.toLowerCase() === "paper" && computerSelection === "Scissor":
            return "You lose! Scissor beats Paper";
            break;         
        case playerSelection.toLowerCase() === "rock" && computerSelection === "Paper":
            return "You lose! Paper beats Rock";
            break;
        case playerSelection.toLowerCase() === "rock" && computerSelection === "Scissor":
            return "You won! Rock beats Scissor";
            break;
        case playerSelection.toLowerCase() === "scissor" && computerSelection === "Rock":
            return "You lose! Rock beats Scissor";
            break;
        case playerSelection.toLowerCase() === "scissor" && computerSelection === "Rock":
            return "You won! Scissor beats Paper";
            break;       
    }
}

function Game() {

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerMove = prompt("Enter a rock, paper or scissor.");
        let computerMove = getComputerChoice();
        const RESULT = playRound(playerMove, computerMove);
        if (RESULT === "You won! Paper beats Rock" || RESULT === "You won! Rock beats Scissor" || RESULT === "You won! Scissor beats Paper") {
            playerScore++;
        } else if (RESULT === "You lose! Scissor beats Paper" || RESULT === "You lose! Paper beats Rock" || RESULT === "You lose! Rock beats Scissor") {
            computerScore++;
        }
        console.log(`Player Score: ${playerScore}  : Computer Score: ${computerScore}`);
    }
    if (playerScore > computerScore) {
        console.log("You Won");
    } else if (playerScore === computerScore){
        console.log("Draw");
    } else {
        console.log("YOu Lost");
    }
}

Game();
