let humanScore = 0;
let computerScore = 0;


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

function getHumanChoice() {
    let x = prompt("Enter your choice");
    return x;
}



function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    let win = false;
    if (humanChoice === computerChoice) {
        console.log(`It's a draw! You both chose ${humanChoice}.`);
        return;
    }


    if (humanChoice === "scissors" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "rock" && computerChoice === "scissors") {
        win = true;
    }
    if (win) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    }
    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;

    }
}

function playGame(rounds) {
    for (let i = 0; i < rounds; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    console.log(`The computer won ${computerScore} rounds, you won ${humanScore} rounds.`)
}

playGame(5);