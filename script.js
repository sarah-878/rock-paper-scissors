/* 

computer logic: 
Create list with values "rock", "paper", "scissor"
Create value for computer choice

Create function getComputerChoice that: 
    Generates a number between 0-2
    set value of computer choice equal to the list at the index of the random number
    return computer choice value


human logic: 
establish variable for human response 
create function getHumanChoice that: 
    prompts the user to enter 
*/

const choiceList = ["rock", "paper", "scissors"]
let humanScore = 0 
let computerScore = 0

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random()*3)
    const computerChoice = choiceList[randomNumber]
    console.log(computerChoice)
    return computerChoice
}

function getHumanChoice() { 
    const humanChoice = prompt("Choose rock, paper, or scissors")
    console.log(humanChoice)
    return humanChoice
}

function playRound(humanChoice, computerChoice) { 
    const human = humanChoice.toLowerCase()

    if ((human === "rock" && computerChoice === "scissors") || (human === "paper" && computerChoice === "rock") || (human === "scissors" && computerChoice === "paper")) {
        console.log(`You Win! ${human} Beats ${computerChoice}`);
        ++humanScore;
        console.log(humanScore);
    } else if (human === computerChoice) { 
        console.log(`A Tie! You both picked ${human}`)
    } else { 
        console.log(`You Lose! ${computerChoice} Beats ${human}`)
        ++computerScore
        console.log(computerScore)
    }


}


const computerSelection = getComputerChoice()
const humanSelection = getHumanChoice()

playRound(humanSelection, computerSelection)

