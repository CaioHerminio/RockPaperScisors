/* script.js */
function playGame(playerChoice) {
    const choices = ["Rock", "Paper", "Scissors"];
    const computerChoice = Math.floor(Math.random() * 3);

    document.getElementById("player-choice").textContent = `You chose: ${choices[playerChoice]}`;
    document.getElementById("computer-choice").textContent = `Computer chose: ${choices[computerChoice]}`;

    if (playerChoice === computerChoice) {
        document.getElementById("game-result").textContent = "It's a tie!";
    } else if (
        (playerChoice === 0 && computerChoice === 2) ||
        (playerChoice === 1 && computerChoice === 0) ||
        (playerChoice === 2 && computerChoice === 1)
    ) {
        document.getElementById("game-result").textContent = "You win! 🎉";
    } else {
        document.getElementById("game-result").textContent = "You lose! 😢";
    }
}
