const buttonsContainer = document.querySelector(".buttons");
buttonsContainer.addEventListener("click", (e) => {
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
    else return 'scissors';
}

function getHumanChoice(e) {
    return e.target.id;
}


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    let win = false;
    if (humanChoice === computerChoice) {
        roundDescriber.textContent = `It's a draw! You both chose ${humanChoice}.`;
        humanScore++;
        computerScore++;
    }


    else {
        if (humanChoice === "scissors" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "rock" && computerChoice === "scissors") {
            win = true;
        }
        if (win) {
            roundDescriber.textContent = `You win! ${humanChoice} beats ${computerChoice}.`
            humanScore++;
        }
        else {
            roundDescriber.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
            computerScore++;

        }
    }
    score.textContent = `Current score: User = ${humanScore} Computer = ${computerScore}`;

    if (Math.abs(humanScore - computerScore) >= 3 || humanScore + computerScore >= 5) {


        let winnerString = (computerScore > humanScore) ? " The computer" : " The user";
        winner.textContent = "The game has ended." + winnerString + " has won with a score of "+humanScore+" - "+computerScore;
        humanScore = 0;
        computerScore = 0;
        score.textContent = `Current score: User = 0 Computer = 0`;


    }

}

