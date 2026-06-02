console.log("Hello World");
function getRandomInt(max){
    return Math.floor(Math.random() * max);// floor remove decimal part // also math.random gives number between 0 and 1 but not including 1 so we multiply it by max to get number between 0 and max but not including max
}


function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = getRandomInt(3);
    return choices[randomIndex];
}

function getHumanChoice(){
    let humanchoice = prompt("Enter your choice (rock, paper, scissors):").toLowerCase();
    while(!["rock", "paper", "scissors"].includes(humanchoice)){
        humanchoice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    }
    return humanchoice;
}

let computerScore = 0;
let humanScore = 0;
function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        return "It's a tie!";
    } else if(
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ){
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
}


for(let round = 0; round<5; round++){
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
}

console.log("Final Score - You: " + humanScore + ", Computer: " + computerScore);
console.log(humanScore > computerScore ? "Congratulations! You won the game!" : humanScore < computerScore ? "Sorry! You lost the game!" : "It's a tie game!");
