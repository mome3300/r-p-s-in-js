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

    // human selection.

    choice = prompt("Enter 'Rock', 'Paper' or 'Scissors' in the box.");
    
    let humanChoice = String(choice).toLowerCase();
     

    if (humanChoice === "rock") {

        return "rock";

    } else if (humanChoice === "paper") {

        return "paper";
 
    } else if (humanChoice === "scissors") {

        return "scissors";

    }
    
};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playGame() {


    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice) {

        let reload = "Please reload this page";

        if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log( `You chose ${humanChoice}, computer chose ${computerChoice}. You win, ${humanChoice} beats ${computerChoice}!`);

            humanScore++
            console.log(reload)

        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log( `You chose ${humanChoice}, computer chose ${computerChoice}. You win, ${humanChoice} beats ${computerChoice}!`);

            humanScore++
            console.log(reload)

        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log( `You chose ${humanChoice}, computer chose ${computerChoice}. You win, ${humanChoice} beats ${computerChoice}!`);

            humanScore++
            console.log(reload)

        } else if (humanChoice === computerChoice) {
            console.log( `You chose ${humanChoice}, computer chose ${computerChoice}. It's a tie.`);

            humanScore++
            computerScore++
            console.log(reload)

        } else if (humanChoice == undefined) {
            console.log(`Please reload this page and make a proper selection!`);

        } else {
            console.log(`You chose ${humanChoice}, computer chose ${computerChoice}. You lose, ${computerChoice} beats ${humanChoice}.`);

            computerScore++
            console.log(reload);
        };
    }

    playRound(humanSelection, computerSelection);
}

playGame()
