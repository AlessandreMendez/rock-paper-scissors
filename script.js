function computerPlay() {
    const computerChoices = ["rock", "paper", "scissors"];
    let computerChoice = computerChoices[Math.floor(Math.random() * 3)];
    return computerChoice;
}

function playerPlay() {
    let playerChoice;
        do {
            playerChoice = prompt("Choose rock, paper or scissors: ");
        } while(playerChoice == null || playerChoice == "");
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}

function playRound(computerSelection, playerSelection) {
    if(computerSelection === playerSelection) {
        console.log("It's a tie, you both chose " + playerSelection + ".");
        return;
    }
    else if(computerSelection === "paper" && playerSelection === "rock") {
        console.log("You lose, paper beats rock.");
        return computerScore += 1;
    }
    else if(computerSelection === "paper" && playerSelection === "scissors") {
        console.log("You win, scissors beat paper.");
        return playerScore += 1;
    }
    else if(computerSelection === "rock" && playerSelection === "paper") {
        console.log("You win, paper beats rock.");
        return playerScore += 1;
    }
    else if(computerSelection === "rock" && playerSelection === "scissors") {
        console.log("You lose, rock beats scissors.");
        return computerScore += 1;

    }
    else if(computerSelection === "scissors" && playerSelection === "rock") {
        console.log("You win, rock beats scissors.");
        return playerScore += 1;
    }
    else if(computerSelection === "scissors" && playerSelection === "paper") {
        console.log("You lose, scissors beat paper.");
        return computerScore += 1;
    }
    else {
        console.log("Error");
        return;
    }
}

function game() {
    playerScore = 0;
    computerScore = 0;
    console.log("Starting a new game of rock paper scissors! \n")
    while(!(playerScore >= 5 || computerScore >= 5)){
        playRound(computerPlay(), playerPlay());
    }
    if(playerScore < computerScore) {
        console.log(`You lose the game! The final score is:\n
        Computer: ${computerScore}\n
        Player:   ${playerScore}`)
    } else if(playerScore < computerScore) {
        console.log(`You win the game! The final score is:\n
        Computer: ${computerScore}\n
        Player:   ${playerScore}`)
    }
}

let playerScore;
let computerScore;