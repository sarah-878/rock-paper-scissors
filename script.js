const choiceList = ["rock", "paper", "scissors"]
const rockButton = document.querySelector('#rock')
const paperButton = document.querySelector('#paper')
const scissorsButton = document.querySelector('#scissors')
const humanPlayed = document.querySelector('.human-play')
const computerPlayed = document.querySelector('.computer-play')
const result = document.querySelector('.result')
const humanScoreText = document.querySelector('.human-score')
const computerScoreText = document.querySelector('.computer-score')
let humanScore = 0 
let computerScore = 0

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random()*3)
    const computerChoice = choiceList[randomNumber]
    console.log(computerChoice)
    return computerChoice
}

function scoreRound(humanChoice, computerChoice) { 
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


rockButton.addEventListener('click', playRound)
paperButton.addEventListener('click', playRound)
scissorsButton.addEventListener('click', playRound)


function playRound(event) {
    const humanSelection = event.target.id
    const computerSelection = getComputerChoice()
    scoreRound(humanSelection, computerSelection)
}



