function getComputerChoice() {

    // logic for randomised computer choices.

    const a = Math.floor(Math.random() * 3);

    if (a === 0) {
        return "rock";
    } else if (a === 1) {
        return "paper";
    } else {
        return "scissors";
    };
};

function getHumanChoice() {

    // logic for human selection.

    const choice = prompt("Enter 'Rock', 'Paper' or 'Scissors' in the box.");

    let humanChoice = String(choice).toLowerCase();
     

    if (humanChoice === "rock") {

        return "rock";

    } else if (humanChoice === "paper") {

        return "paper";
 
    } else if (humanChoice === "scissors") {

        return "scissors";

    } else {

        return ""

    }
    
};

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    if (humanChoice === "") {
        console.log(`Please reload this page.`);

    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log( `You chose ${humanChoice}, computer chose ${computerChoice}. You win, ${humanChoice} beats ${computerChoice}!`);
        console.log("Please reload this page")

    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log( `You chose ${humanChoice}, computer chose ${computerChoice}. You win, ${humanChoice} beats ${computerChoice}!`);
        console.log("Please reload this page")

    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log( `You chose ${humanChoice}, computer chose ${computerChoice}. You win, ${humanChoice} beats ${computerChoice}!`);
        console.log("Please reload this page")

    } else if (humanChoice === computerChoice) {
        console.log( `You chose ${humanChoice}, computer chose ${computerChoice}. It's a tie.`);
        console.log("Please reload this page")

    } else if (!humanChoice == true) {
        console.log(`Please reload this page and make a proper selection!`);
        console.log("Please reload this page")

    } else {
        console.log(`You chose ${humanChoice}, computer chose ${computerChoice}. You lose, ${computerChoice} beats ${humanChoice}.`);
        console.log("Please reload this page");
    };
};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);