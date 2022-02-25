
let playerScore = 0;
let computerScore = 0;

/*Generate function that returns random results of Rock, Paper or Scissors*/
function computerPlay(){
    let randomNumber = Math.floor((Math.random() *3));
    
    if (randomNumber === 0){
        return "ROCK";
    } else if (randomNumber === 1){
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

/*Create function that plays one game of RPS, comparing two answers one for computer and one  for player, returns string with result*/
function playRound(playerSelection, computerSelection){

/*make playerSelection uppercase to allow for any case input*/
playerSelection = playerSelection.toUpperCase();

    if (playerSelection === computerSelection){
        return "Draw!";
    } else if ((playerSelection === "ROCK")&&(computerSelection === "PAPER")){
        computerScore++;
        return "Paper beats rock, you lose!";
    } else if ((playerSelection === "ROCK")&&(computerSelection === "SCISSORS")){
        playerScore++;
        return "Rock beats scissors, you win!";
    } else if ((playerSelection === "PAPER")&&(computerSelection === "ROCK")){
        playerScore++;
        return "Paper beats rock, you win!";
    } else if ((playerSelection === "PAPER")&&(computerSelection === "SCISSORS")){
        computerScore++;
        return "Scissors beats paper, you lose!";
    } else if ((playerSelection === "SCISSORS")&&(computerSelection === "ROCK")){
        computerScore++;
        return "Rock beats scissors, you lose!";
    } else {
        playerScore++;
        return "Scissors beat paper, you win!";
    }


}

/*Creat function that plays five games */
function game(){

    
    for (let gameCounter = 0; gameCounter < 5; gameCounter++) {

        let playerSelection = prompt("Play five games of Rock, Paper, Scissors against the computer! Type in your choice!");
        let computerSelection = computerPlay();

        console.log(`You played ${playerSelection}`);
        console.log(`Computer played ${computerSelection}`);

        console.log(playRound(playerSelection, computerSelection));

        console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}`);
      }

    if (playerScore === computerScore){
        console.log("Overall draw! :/");
    } else if (playerScore > computerScore){
        console.log("You win overall! :)");
    } else {
        console.log("You lose overall :(");
    }
}

game();

/*Add something to deal with player answers an incorrect string or cancels"*/