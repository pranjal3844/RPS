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


const resultDiv = document.querySelector("#result");

let computerScore = 0;
let humanScore = 0;
function playRound(humanChoice, computerChoice){

    if (humanScore === 5) {
        resultDiv.textContent = "You won the game!";
        humanScore = 0;
        computerScore = 0;
    }
    
    if (computerScore === 5) {
        resultDiv.textContent = "Computer won the game!";
        humanScore = 0;
        computerScore = 0;
    } 

    if(humanChoice === computerChoice){
        resultDiv.textContent =`it's a tie! Player: ${humanScore} Computer: ${computerScore}`;
    } else if(
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ){
        humanScore++;
        resultDiv.textContent =` you won! Player: ${humanScore} Computer: ${computerScore}`;
    } else {
        computerScore++;
        resultDiv.textContent =`Computer Won! Player: ${humanScore} Computer: ${computerScore}`;
    }

    
}

const rockbtn = document.getElementById("rock");
const paperbtn = document.getElementById("paper");
const scissorsbtn = document.getElementById("scissors");

rockbtn.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    const result = playRound("rock", computerChoice);
    console.log(result);
    console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
}
);
paperbtn.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    const result = playRound("paper", computerChoice);
    console.log(result);
    console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
}
);
scissorsbtn.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    const result = playRound("scissors", computerChoice);
    console.log(result);
    console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
}
);





// for(let round = 0; round<5; round++){
//     const humanChoice = getHumanChoice();
//     const computerChoice = getComputerChoice();
//     playRound(humanChoice, computerChoice);
//     console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
// }

// console.log("Final Score - You: " + humanScore + ", Computer: " + computerScore);
// console.log(humanScore > computerScore ? "Congratulations! You won the game!" : humanScore < computerScore ? "Sorry! You lost the game!" : "It's a tie game!");
