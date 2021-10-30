function computerPlay() {
    var randomNumber = Math.floor(Math.random() * (3)) + 1;
    if (randomNumber == 1) {
        return "Rock";
    }
    else if (randomNumber == 2) {
        return "Paper";
    }
    else if (randomNumber == 3) {
        return "Scissor";
    }
}
var score = 0;
var computerScore = 0;

function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "Paper") {
        computerScore += 1;
        return "You lose! Paper beats Rock.";
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Rock") {
        score += 1;
        return "You win! Paper beats Rock.";
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Scissor") {
        computerScore += 1;
        return "You lose! Scissors beat Paper.";
    }
    else if (playerSelection.toLowerCase() == "scissor" && computerSelection == "Paper") {
        score += 1;
        return "You win! Scissors beat Paper.";
    }
    else if (playerSelection.toLowerCase() == "scissor" && computerSelection == "Rock") {
        computerScore += 1;
        return "You lose! Rock beats Scissor.";
    }
    else if (playerSelection.toLowerCase() == "rock" && computerSelection == "Scissor") {
        score += 1;
        return "You win! Rock beats Scissor.";
    }
    else if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return "Tie!";
    }
    return score, computerScore;
  }

function winnerLoser() {
    if (score > computerScore) {
        return "Overall Score: Winner!"
    }
    else if (score == computerScore) {
        return "Overall Score: Tie!"
    }
    else {
        return "Overall Score: Loser!"
    }
}
function game() {
    i = 0;
    while (i < 5) {
       const playerSelection = window.prompt("Rock, paper, scissors!: ");
       const computerSelection = computerPlay();
       console.log(playRound(playerSelection, computerSelection));
       console.log("Your score is: " + score + ", The computer's score: " + computerScore);
       i += 1;
    }
    return winnerLoser();
}
    //    For unlimited game (commented out):
    //    const userPrompt = window.prompt("Do you want to continue? Y/N: ")
    //    if (userPrompt == "Y") {
    //        continue;
    //    } else if (userPrompt == "N") {
    //        console.log("Your score is: " + score)
    //        break;
    //    }