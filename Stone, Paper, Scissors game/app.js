let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const resultMessage_p = document.getElementById("result-message");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

function convertToWord(choice) {
    if (choice === 'rock') return "Stone";
    if (choice === 'paper') return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    resultMessage_p.innerHTML = `You chose ${convertToWord(userChoice)}, Computer chose ${convertToWord(computerChoice)}. You win! 🎉`;
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    resultMessage_p.innerHTML = `You chose ${convertToWord(userChoice)}, Computer chose ${convertToWord(computerChoice)}. You lost! 😢`;
}

function draw(userChoice, computerChoice) {
    resultMessage_p.innerHTML = `You both chose ${convertToWord(userChoice)}. It's a draw! 🤝`;
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, computerChoice);
            break;
        default:
            draw(userChoice, computerChoice);
            break;
    }
}

rock_div.addEventListener('click', function() {
    game("rock");
});

paper_div.addEventListener('click', function() {
    game("paper");
});

scissors_div.addEventListener('click', function() {
    game("scissors");
});
