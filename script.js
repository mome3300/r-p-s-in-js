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

const choice = prompt("Enter 'Rock', 'Paper' or 'Scissors' in the box.");

function getHumanChoice() {

    // human selection.

    let humanChoice = String(choice);
    
    return humanChoice.toLowerCase()

};

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        let reload = "Please reload this page";

        if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log(`You chose ${humanChoice}, computer chose ${computerChoice}. You win, ${humanChoice} beats ${computerChoice}!`);

            humanScore++
            
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log(`You chose ${humanChoice}, computer chose ${computerChoice}. You win, ${humanChoice} beats ${computerChoice}!`);

            humanScore++

        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log(`You chose ${humanChoice}, computer chose ${computerChoice}. You win, ${humanChoice} beats ${computerChoice}!`);

            humanScore++

        } else if (humanChoice === computerChoice) {
            console.log(`You chose ${humanChoice}, computer chose ${computerChoice}. It's a tie.`);

            humanScore++
            computerScore++
            
        } else if (humanChoice == undefined) {
            console.log(`Please reload this page and make a proper selection!`);

        } else {
            console.log(`You chose ${humanChoice}, computer chose ${computerChoice}. You lose, ${computerChoice} beats ${humanChoice}.`);

            computerScore++
        };

        let score = `H${humanScore} : C${computerScore}`;

        console.log(score);
    }


    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
}

playGame();
