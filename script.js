
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection = computerPlay();

const rockButton = document.querySelector('#rock-button');
const paperButton = document.querySelector('#paper-button');
const scissorsButton = document.querySelector('#scissors-button');

const newGame = document.querySelector('.newGame');

newGame.disabled = true;

const resultParas = document.querySelector('.resultParas');
const userGamePlay = document.querySelector('.userGamePlay');
const computerGamePlay = document.querySelector('.computerGamePlay');
const gameResult = document.querySelector('.gameResult');
const scoreBoard = document.querySelector('.scoreBoard');
const finalResult = document.querySelector('.finalResult');


rockButton.addEventListener('click', rockGame);
paperButton.addEventListener('click', paperGame);
scissorsButton.addEventListener('click', scissorsGame);

newGame.addEventListener('click', reset);

function reset(){
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
    userGamePlay.textContent = "";
    computerGamePlay.textContent = "";
    gameResult.textContent = "";
    scoreBoard.textContent = "";
    finalResult.textContent = "";
    playerScore = 0;
    computerScore = 0;

}

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

/*Create function that plays one rock, paper, scissor game */
function rockGame(){

        let playerSelection = "Rock"; 
        let computerSelection = computerPlay();

        userGamePlay.textContent = `You played ${playerSelection.toLowerCase()}` 
        computerGamePlay.textContent = `Computer played ${computerSelection.toLowerCase()}`;

       

        gameResult.textContent = (playRound(playerSelection, computerSelection));

        scoreBoard.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`;
        
        if((playerScore === 5)||(computerScore === 5)){
            document.getElementById("rock-button").disabled = true; 
            document.getElementById("paper-button").disabled = true; 
            document.getElementById("scissors-button").disabled = true; 
            newGame.disabled = false;
            if(playerScore > computerScore){
                finalResult.textContent = "END OF GAME - You win!";
            } else {
                finalResult.textContent = "END OF GAME - Computer wins!";
            }
        }

}

function paperGame(){

    let playerSelection = "Paper"; 
    let computerSelection = computerPlay();

    userGamePlay.textContent = `You played ${playerSelection.toLowerCase()}` 
    computerGamePlay.textContent = `Computer played ${computerSelection.toLowerCase()}`;
    


    gameResult.textContent = (playRound(playerSelection, computerSelection));

    scoreBoard.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`;

    if((playerScore === 5)||(computerScore === 5)){
        document.getElementById("rock-button").disabled = true;
        document.getElementById("paper-button").disabled = true; 
        document.getElementById("scissors-button").disabled = true; 
        newGame.disabled = false;
        if(playerScore > computerScore){
            finalResult.textContent = "END OF GAME - You win!";
        } else {
            finalResult.textContent = "END OF GAME - Computer wins!";
        }

        
    }

}

function scissorsGame(){

    let playerSelection = "Scissors"; 
    let computerSelection = computerPlay();

    userGamePlay.textContent = `You played ${playerSelection.toLowerCase()}` 
    computerGamePlay.textContent = `Computer played ${computerSelection.toLowerCase()}`;

    gameResult.textContent = (playRound(playerSelection, computerSelection));

    scoreBoard.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`;

    if((playerScore === 5)||(computerScore === 5)){
        document.getElementById("rock-button").disabled = true;
        document.getElementById("paper-button").disabled = true; 
        document.getElementById("scissors-button").disabled = true;
        newGame.disabled = false; 
        if(playerScore > computerScore){
            finalResult.textContent = "END OF GAME - You win!";
        } else {
            finalResult.textContent = "END OF GAME - Computer wins!";
        }
    }

}