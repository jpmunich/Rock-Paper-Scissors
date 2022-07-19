const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById("paper-button");
const scissorsButton = document.getElementById("scissors-button");
const newPContainer = document.getElementById("new-p-container");

const newP = document.createElement("p");
newPContainer.appendChild(newP);

function createTheElement(text) {
    newP.innerText = text;
    newP.setAttribute("class", "newP")
}

function playGame(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === 0) {
            createTheElement("Tie!");
        }
        else if (computerSelection === 1) {
            createTheElement("Computer Wins!");
        }
        else if (computerSelection === 2) { 
            createTheElement("Player Wins!");
        }
        else {
            alert("ERROR!");
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === 0) {
            createTheElement("Player Wins!");
        }
        else if (computerSelection === 1) {
            createTheElement("Tie!");
        }
        else if (computerSelection === 2) {
            createTheElement("Computer Wins!");
        }
        else {
            alert("ERROR!");
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === 0) {
            createTheElement("Computer Wins!");
        }
        else if (computerSelection === 1) {
            createTheElement("Player Wins!");
        }
        else if (computerSelection === 2) {
            createTheElement("Tie!");
        }
        else {
            alert("ERROR!");
        }
    }
}

rockButton.addEventListener("click", function() {
    playGame("rock", Math.floor(Math.random() * 3));
});

paperButton.addEventListener("click", function() {
    playGame("paper", Math.floor(Math.random() * 3));
});

scissorsButton.addEventListener("click", function() {
    playGame("scissors", Math.floor(Math.random() * 3));
});
