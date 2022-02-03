function computerPlay () {
    let randomNumber = Math.floor(Math.random()*3);
    console.log(randomNumber);

    if (randomNumber === 0){
        computerSelection = "ROCK";
        console.log(computerSelection);
        return computerSelection;
    } else if (randomNumber === 1){
        computerSelection = "PAPER";
        console.log(computerSelection);
        return computerSelection;
    } else {
        computerSelection = "SCISSORS";
        console.log(computerSelection);
        return computerSelection;
    }

}

function playRound(playerSelection, computerSelection){

    let upperCaseplayerSelection = playerSelection.toUpperCase();
  
        if (upperCaseplayerSelection === computerSelection){
            return "Draw!";
        } else if ((upperCaseplayerSelection === "ROCK")&&(computerSelection === "PAPER")){
            return "You Lose! Paper beats Rock!";
        } else if ((upperCaseplayerSelection === "ROCK")&&(computerSelection === "SCISSORS")){
            return "You Win! Rock beats Scissors!";
        } else if ((upperCaseplayerSelection === "PAPER")&&(computerSelection === "ROCK")){
            return "You Win! Paper beats Rock!";
        } else if ((upperCaseplayerSelection === "PAPER")&&(computerSelection === "SCISSORS")){
            return "You Lose! Scissors beats Paper!";
        } else if ((upperCaseplayerSelection === "SCISSORS")&&(computerSelection === "ROCK")){
            return "You Lose! Rock beats Scissors!";
        } else if ((upperCaseplayerSelection === "SCISSORS")&&(computerSelection === "PAPER")){
            return "You Win! Scissors beats Paper!";
        } else {
            return "Something went wrong";
        }
}

