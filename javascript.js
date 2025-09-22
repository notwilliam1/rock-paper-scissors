function getComputerChoice() {
    
    let randomNum = Math.floor(Math.random() * 3) + 1;
    
    switch (randomNum) {
        case 1:
            result = "rock"
            break;
        case 2:
            result = "paper"
            break;
        case 3:
            result = "scissors"
            break;
    }

    return result

}

function getHumanChoice() {

    let humanChoice = prompt("Make your choice (rock, paper, scissors): ")

    return humanChoice

}

function playRound(humanChoice, computerChoice, humanScore, computerScore) {
    let lowerHumanChoice = humanChoice.toLowerCase();
    let winner = null;
    
    switch (lowerHumanChoice){
        case "rock":
            if (computerChoice === "scissors") {
                console.log("You win! Rock beats scissors.")
                winner = "human";
            } else if (computerChoice === "paper") {
                console.log("You lose! Rock loses to paper.")
                winner = "computer";
            } else if (computerChoice === "rock") {
                console.log("It's a tie! You both chose rock.")
            }
            break;
        case "paper":
            if (computerChoice === "scissors") {
                console.log("You lose! Paper loses to scissors.")
                winner = "computer";
            } else if (computerChoice === "rock") {
                console.log("You win! Paper beats rock.")
                winner = "human";
            } else if (computerChoice === "paper") {
                console.log("It's a tie! You both chose paper.")
            }
            break;
        case "scissors":
            if (computerChoice === "paper") {
                console.log("You win! Scissors beats paper.")
                winner = "human";
            } else if (computerChoice === "rock") {
                console.log("You lose! Scissors loses to rock.")
                winner = "computer";
            } else if (computerChoice === "scissors") {
                console.log("It's a tie! You both chose scissors.")
            }
            break;
    }
    return winner   
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        
        let winner = playRound(humanChoice, computerChoice, humanScore, computerScore);

        if (winner == "human") {
            humanScore++;
        } else if (winner == "computer") {
            computerScore++;
        }

        console.log("Your score: " + humanScore)
        console.log("Computer score: " + computerScore)

    }

    console.log("====RESULTS====")
    if (humanScore > computerScore) {
        console.log("You win! " + humanScore + " - " + computerScore)
    } else if (computerScore >humanScore) {
        console.log("You lose! " + humanScore + " - " + computerScore)
    } else if (humanScore == computerScore) {
        console.log("You tie! " + humanScore + " - " + computerScore)
    }
}

playGame()
