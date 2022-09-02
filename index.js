function getComputerChoice() {
    if (Math.floor(Math.random()*3) === 0) {
        return "Rock";
    } else if (Math.floor(Math.random()*3) === 1) {
        return "Paper";
    } else {
        return "Scissor";
    }
}
/*
console.log(getComputerChoice());
*/

// Single round of Rock Paper Scissors
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

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


/*
const computerMove = getComputerChoice();


function Game() {
    for (let i = 0; i < 5; i++) {
        const playerMove = prompt("Enter a rock, paper or scissor.");
        const computerMove = getComputerChoice();
        console.log(playRound(playerMove, computerMove));
        
        const score = 0;
        const result = playRound();
        if (result === "You won! Paper beats Rock" || result === "You won! Rock beats Scissor" || result === "You won! Scissor beats Paper") {
            score++;
            console.log(score);
        }
        

    }
}

Game();
*/