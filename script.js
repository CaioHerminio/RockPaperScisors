const choiceButtons = document.querySelectorAll('.choice-button');
const resultsDiv = document.getElementById('results');
const playAgainButton = document.getElementById('play-again-button');

choiceButtons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.dataset.choice;
        const computerChoice = getComputerChoice();
        const winner = determineWinner(playerChoice, computerChoice);

        displayResults(playerChoice, computerChoice, winner);
        playAgainButton.style.display = 'block';
    });
});

playAgainButton.addEventListener('click', () => {
    resultsDiv.textContent = '';
    playAgainButton.style.display = 'none';
});

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'Tie!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}

function displayResults(playerChoice, computerChoice, winner) {
    resultsDiv.textContent = `You chose: ${playerChoice}\nComputer chose: ${computerChoice}\n${winner}`;
}
