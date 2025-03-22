function playGame(playerChoice) {
    const choices = ["Rock", "Paper", "Scissors"];
    const computerChoice = Math.floor(Math.random() * 3);

    document.getElementById("player-choice").innerText = `You chose: ${choices[playerChoice]}`;
    document.getElementById("computer-choice").innerText = `Computer chose: ${choices[computerChoice]}`;

    let resultText;
    if (playerChoice === computerChoice) {
        resultText = "It's a tie!";
    } else if (
        (playerChoice === 0 && computerChoice === 2) ||
        (playerChoice === 1 && computerChoice === 0) ||
        (playerChoice === 2 && computerChoice === 1)
    ) {
        resultText = "You win!";
    } else {
        resultText = "You lose!";
    }

    document.getElementById("result").innerText = resultText;
    document.getElementById("play-again").style.display = "block"; // Show Play Again button
}

function resetGame() {
    document.getElementById("player-choice").innerText = "";
    document.getElementById("computer-choice").innerText = "";
    document.getElementById("result").innerText = "";
    document.getElementById("play-again").style.display = "none"; // Hide Play Again button
}
