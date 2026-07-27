const choiceList = ["rock", "paper", "scissors"]
const rockButton = document.querySelector('#rock')
const paperButton = document.querySelector('#paper')
const scissorsButton = document.querySelector('#scissors')
let humanScore = 0 
let computerScore = 0

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random()*3)
    const computerChoice = choiceList[randomNumber]
    console.log(computerChoice)
    return computerChoice
}

function playRound(humanChoice, computerChoice) { 
    if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
    console.log(`You Win! ${humanChoice} Beats ${computerChoice}`);
    ++humanScore;
    console.log(humanScore);
    } else if (humanChoice === computerChoice) { 
        console.log(`A Tie! You both picked ${humanChoice}`)
    } else { 
    console.log(`You Lose! ${computerChoice} Beats ${humanChoice}`)
    ++computerScore
    console.log(computerScore)
    }
}


rockButton.addEventListener('click', startRound)
paperButton.addEventListener('click', startRound)
scissorsButton.addEventListener('click', startRound)


function startRound(event) {
    const humanSelection = event.target.id
    const computerSelection = getComputerChoice()
    playRound(humanSelection, computerSelection)
}



