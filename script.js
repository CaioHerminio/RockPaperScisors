const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) return "It's a tie!";
    if (
        (userChoice === "Rock" && computerChoice === "Scissors") ||
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Scissors" && computerChoice === "Paper")
    ) {
        return "You win!";
    }
    return "You lose!";
}

function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    const resultMessage = determineWinner(userChoice, computerChoice);

    document.getElementById("result").innerHTML = `
        <p>You chose: <strong>${userChoice}</strong></p>
        <p>Computer chose: <strong>${computerChoice}</strong></p>
        <p>${resultMessage}</p>
    `;

    document.getElementById("playAgain").style.display = "block";
}

function resetGame() {
    document.getElementById("result").innerHTML = "";
    document.getElementById("playAgain").style.display = "none";
}
