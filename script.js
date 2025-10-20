function getComputerChoice() {

    // logic for randomised computer choices.

    const a = Math.floor(Math.random() * 3);

    if (a == 0) {
        return "rock";
    } else if (a == 1) {
        return "paper";
    } else {
        return "scissors";
    };
};

function getHumanChoice() {

    // logic for human selection.

    const choice = prompt();

    selection = ["rock", "paper", "scissors"];

    if (choice && selection) {
        return String(choice.toLowerCase());
    }
    
};

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    if (humanChoice == "rock", computerChoice == "scissors") {
        console.log( `You chose ${humanChoice}, computer chose ${computerChoice}. You win, ${humanChoice} beats ${computerChoice}!`);

    } else if (humanChoice == "paper", computerChoice == "rock") {
        console.log( `You chose ${humanChoice}, computer chose ${computerChoice}. You win, ${humanChoice} beats ${computerChoice}!`);

    } else if (humanChoice == "scissors", computerChoice == "paper") {
        console.log( `You chose ${humanChoice}, computer chose ${computerChoice}. You win, ${humanChoice} beats ${computerChoice}!`);

    } else if (humanChoice == computerChoice) {
        console.log( `You chose ${humanChoice}, computer chose ${computerChoice}. It's a tie.`);

    } else {
        console.log( `You chose ${humanChoice}, computer chose ${computerChoice}. You lose, ${humanChoice} beats ${computerChoice}.`);
    }
};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);