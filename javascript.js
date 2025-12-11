function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    
    switch (randomNum) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function domLog(message) {
    const log = document.getElementById("results");
    if (log) {
        const p = document.createElement("p");
        p.textContent = message;
        log.appendChild(p);
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    document.body.innerHTML = "<h1>Rock Paper Scissors</h1><p>Click a button to make your choice:</p>";
    
    const rock_button = document.createElement("button");
    const paper_button = document.createElement("button");
    const scissors_button = document.createElement("button");
    
    rock_button.innerHTML = "Rock";
    paper_button.innerHTML = "Paper";
    scissors_button.innerHTML = "Scissors";

    for (const btn of [rock_button, paper_button, scissors_button]) {
        btn.style.cssText = `
            font-size: 16px;
            margin: 5px;
            padding: 10px 20px;
            cursor: pointer;
        `;
    }   
    
    document.body.appendChild(rock_button);
    document.body.appendChild(paper_button);
    document.body.appendChild(scissors_button);
    
    // Create log container
    const logContainer = document.createElement('div');
    logContainer.id = "results";
    logContainer.style.cssText = `
        position: fixed;
        bottom: 0;
        left: 0;
        max-height: 500px;
        width: 100%;
        overflow-y: auto;
        background-color: #f0f0f0;
        border-top: 1px solid #ccc;
        padding: 10px;
        font-family: Arial, sans-serif;
        font-size: 14px;
    `;
    document.body.appendChild(logContainer);
    
    function playRound(humanChoice, computerChoice) {
        const lowerHumanChoice = humanChoice.toLowerCase();
        let winner = null;
        
        switch (lowerHumanChoice){
            case "rock":
                if (computerChoice === "scissors") {
                    domLog("You win! Rock beats scissors.");
                    winner = "human";
                } else if (computerChoice === "paper") {
                    domLog("You lose! Rock loses to paper.");
                    winner = "computer";
                } else {
                    domLog("It's a tie! You both chose rock.");
                }
                break;
            case "paper":
                if (computerChoice === "scissors") {
                    domLog("You lose! Paper loses to scissors.");
                    winner = "computer";
                } else if (computerChoice === "rock") {
                    domLog("You win! Paper beats rock.");
                    winner = "human";
                } else {
                    domLog("It's a tie! You both chose paper.");
                }
                break;
            case "scissors":
                if (computerChoice === "paper") {
                    domLog("You win! Scissors beats paper.");
                    winner = "human";
                } else if (computerChoice === "rock") {
                    domLog("You lose! Scissors loses to rock.");
                    winner = "computer";
                } else {
                    domLog("It's a tie! You both chose scissors.");
                }
                break;
        }
        
        if (winner === "human") {
            humanScore += 1;
        } else if (winner === "computer") {
            computerScore += 1;
        }
        
        domLog(`Score - You: ${humanScore}, Computer: ${computerScore}`);
        
        if (humanScore === 5 || computerScore === 5) {
            domLog("==== GAME OVER ====");
            if (humanScore > computerScore) {
                domLog(`You win the game! ${humanScore} - ${computerScore}`);
            } else {
                domLog(`You lose the game! ${humanScore} - ${computerScore}`);
            }
            rock_button.disabled = true;
            paper_button.disabled = true;
            scissors_button.disabled = true;
        }
    }
    
    rock_button.addEventListener("click", () => {
        playRound("rock", getComputerChoice());
    });
    paper_button.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
    });
    scissors_button.addEventListener("click", () => {
        playRound("scissors", getComputerChoice());
    });
}

playGame();