let turns = 0;
const buttonsContainer = document.querySelector(".buttons");
buttonsContainer.addEventListener("click", (e) => {
    if (e.target.id) 
        playRound(getHumanChoice(e), getComputerChoice())
});

const roundDescriber = document.querySelector("#round-decription");

const score = document.querySelector("#score");

const body = document.querySelector("#game-content");
let humanScore = 0;
let computerScore = 0;

const winner = document.createElement("p");
body.appendChild(winner);

function getComputerChoice() {
    let n = Math.floor(Math.random() * 3);
    if (n == 0) {
        return 'rock';
    }
    else if (n == 1) {
        return 'paper';
    }
    else return 'scissor';
}

function getHumanChoice(e) {
    return e.target.id;
}


function playRound(humanChoice, computerChoice) {
    winner.textContent = "";
    let win = false;

    if (humanChoice === computerChoice) {
        roundDescriber.textContent = `It's a draw! You both chose ${humanChoice}.`;
        humanScore++;
        computerScore++;
    }


    else {
        if (humanChoice === "scissor" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "rock" && computerChoice === "scissor") {
            win = true;
        }
        if (win) {
            roundDescriber.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
            humanScore++;
        }
        else {
            roundDescriber.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
            computerScore++;
        }

    }
    score.textContent = `Current score: User = ${humanScore} | Computer = ${computerScore}`;
    turns++;
    if (turns == 5) {


        let winnerString = (computerScore > humanScore) ? " The computer has won " : (computerScore < humanScore) ? " The user has won " : " It's a draw ";
        winner.textContent = "The game has ended." + winnerString + "with a score of " + humanScore + " - " + computerScore;
        humanScore = 0;
        computerScore = 0;
        turns = 0;
        score.textContent = `Current score: User = 0 Computer = 0`;


    }

}

