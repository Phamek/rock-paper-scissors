
function getComputerChoice() {
    if (Math.floor(Math.random()*3) === 0) {
        return "Rock";
    } else if (Math.floor(Math.random()*3) === 1) {
        return "Paper";
    } else {
        return "Scissor";
    }
}

// Single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock") {
        return "You won! Paper beats Rock";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Scissor") {
        return "You lose! Scissor beats Paper";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Paper") {
        return "You lose! Paper beats Rock";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Scissor") {
        return "You won! Rock beats Scissor";
    } else if (playerSelection.toLowerCase() === "scissor" && computerSelection === "Rock") {
        return "You lose! Rock beats Scissor";
    } else if (playerSelection.toLowerCase() === "scissor" && computerSelection === "Rock") {
        return "You won! Scissor beats Paper";
    } else {
        return "Draw";
    }
}
