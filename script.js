function computerPlay() {
    const computerChoices = ["rock", "paper", "scissors"];
    let computerChoice = computerChoices[Math.floor(Math.random() * 3)];
    return computerChoice;
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    if(computerSelection === playerSelection) {
        results.innerHTML = "It's a tie, you both chose " + playerSelection + ".";
    }
    else if(computerSelection === "paper" && playerSelection === "rock") {
        results.innerHTML= "You lose, paper beats rock.";
        computerScore += 1;
        computerScoreText.innerHTML = computerScore;
    }
    else if(computerSelection === "paper" && playerSelection === "scissors") {
        results.innerHTML= ("You win, scissors beat paper.");
        playerScore += 1;
        playerScoreText.innerHTML = playerScore;
    }
    else if(computerSelection === "rock" && playerSelection === "paper") {
        results.innerHTML= ("You win, paper beats rock.");
        playerScore += 1;
        playerScoreText.innerHTML = playerScore;
    }
    else if(computerSelection === "rock" && playerSelection === "scissors") {
        results.innerHTML= ("You lose, rock beats scissors.");
        computerScore += 1;
        computerScoreText.innerHTML = computerScore;
    }
    else if(computerSelection === "scissors" && playerSelection === "rock") {
        results.innerHTML= ("You win, rock beats scissors.");
         playerScore += 1;
         playerScoreText.innerHTML = playerScore;
    }
    else if(computerSelection === "scissors" && playerSelection === "paper") {
        results.innerHTML= ("You lose, scissors beat paper.");
        computerScore += 1;
        computerScoreText.innerHTML = computerScore;
    }
    else {
        results.innerHTML= ("Error");
    }
    checkWinner();
}

function checkWinner() {
    if(computerScore >=5 || playerScore >= 5){
        if(playerScore > computerScore) {
            if(confirm("You win the game! Do you want to play again?")) {
                location.reload();
            }
        }
        else if(playerScore < computerScore) {
            if(confirm("You lost the game! Do you want to play again?")) {
                location.reload();
            }
        }
    }
    return;
}

let playerScore = 0;
let computerScore = 0;
let playerScoreText = document.querySelector("#player-score");
let computerScoreText = document.querySelector("#computer-score");
let buttons = document.querySelectorAll("img");
let results = document.querySelector("#round-results");

buttons.forEach(button =>{
    button.addEventListener('click', function(e){
        playRound(e.target.id)
    })
})