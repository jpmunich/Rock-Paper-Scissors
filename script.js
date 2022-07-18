const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById("paper-button");
const scissorsButton = document.getElementById("scissors-button");

function playGame(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === 0) {
            const newP = document.createElement("p");
            newP.innerText = "Tie!";
            document.body.appendChild(newP);
        }
        else if (computerSelection === 1) {
            return "Computer Wins!"
        }
        else if (computerSelection === 2) {
            return "Player Wins!"
        }
        else {
            return "ERROR!"
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === 0) {
            return "Player Wins!"
        }
        else if (computerSelection === 1) {
            return "Tie!"
        }
        else if (computerSelection === 2) {
            return "Computer Wins!"
        }
        else {
            return "ERROR!"
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === 0) {
            return "Computer Wins!"
        }
        else if (computerSelection === 1) {
            return "Player Wins!"
        }
        else if (computerSelection === 2) {
            return "Tie!"
        }
        else {
            return "ERROR!"
        }
    }
}

rockButton.addEventListener("click", function() {
    const select = computerSelect();
    playGame("rock", Math.floor(Math.random() * 3));
});
