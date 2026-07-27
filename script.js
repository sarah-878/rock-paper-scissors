const choiceList = ["rock", "paper", "scissors"]
const rockButton = document.querySelector('#rock')
const paperButton = document.querySelector('#paper')
const scissorsButton = document.querySelector('#scissors')
const humanPlayed = document.querySelector('.human-play')
const computerPlayed = document.querySelector('.computer-play')
const result = document.querySelector('.result')
const humanScoreText = document.querySelector('.human-score')
const computerScoreText = document.querySelector('.computer-score')
const final = document.querySelector(".final");
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
        result.textContent = `You Win! ${humanChoice} Beats ${computerChoice}`
        ++humanScore;
        humanScoreText.textContent = `Your Score: ${humanScore}`
    } else if (humanChoice === computerChoice) { 
        result.textContent = `A Tie! You both picked ${humanChoice}`
    } else { 
        result.textContent = `You Lose! ${computerChoice} Beats ${humanChoice}`
        ++computerScore
        computerScoreText.textContent = `Computer Score: ${computerScore}`
    }
}


rockButton.addEventListener('click', playRound)
paperButton.addEventListener('click', playRound)
scissorsButton.addEventListener('click', playRound)


function playRound(event) {
    const humanSelection = event.target.id
    humanPlayed.textContent = `You Played: ${humanSelection}` 
    const computerSelection = getComputerChoice()
    computerPlayed.textContent = `Computer Played: ${computerSelection}`
    scoreRound(humanSelection, computerSelection)
    if (computerScore === 5) {
        final.textContent = 'The computer wins the game!!'
    } else if (humanScore === 5) { 
        final.textContent = 'You win the game!!'
        
    }
}



