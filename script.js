let humanScore = 0;
let computerScore = 0;



function getComuterChooice() {
  let comChoice = Math.floor((Math.random() * 3)) +1;
 if (compChoice == 1){
  return "rock";
 }
   else if (compChoice == 2) {
    return "paper";
   }
   else return "scissoers";
}


function getHumanChoice() {
  let humanChoice = " ";
  while (
    humanChoice.toLowerCase().trim() !== "rock" &&
    humanChoice.toLowerCase().trim() !== "paper" &&
    humanChoice.toLowerCase().trim() !== "scissors"
  ) {
    humanChoice = prompt("Enter your choice(Rock, Paper or Scissors");
  }
  return humanChoice;
}
let description = ''

function playRound(computerChoice, humanChoice) {
 
  if (computerChoice == 'rock' && humanChoice == 'rock' 
      || computerChoice == 'paper' && humanChoice == 'paper'
      || computerChoice == 'scissors' && humanChoice == 'scissors'
  ) {
 return description = `Tie! 
      Computer: ${computerScore} \t Human: ${humanScore}`
  } else if (computerChoice == 'rock' && humanChoice == 'scissors'
      || computerChoice == 'paper' && humanChoice == 'rock'
      || computerChoice == 'scissors' && humanChoice == 'paper'
  ) {
      computerScore +=1;
      return description = `You lose! ${computerChoice} beats ${humanChoice}
      Computer: ${computerScore} \t Human: ${humanScore}`
  } else if (computerChoice == 'rock' && humanChoice == 'paper'
      || computerChoice == 'paper' && humanChoice == 'scissors'
      || computerChoice == 'scissors' && humanChoice == 'rock'
  ){
      humanScore +=1;
      return description = `You Win! ${humanChoice} beats ${computerChoice}
      Computer: ${computerScore} \t Human: ${humanScore}`
  } else {
      return humanChoice;
  }
}



function playGame(){
 

  
 
  for(let i = 0; i < 5; i++){
     let humanSelection = getHumanChoice();
      let computerSelection = getComputerChoice();
      console.log(`Round-${i+1}`);
      let humanWon = playRound(humanSelection, computerSelection);
      if(humanWon){
          humanScore++;
          console.log(`You win! ${humanSelection} beats ${computerSelection}`);
      }else if(humanWon === null){
          console.log("You are even! Keep playing!");
      }
      else{
          computerScore++;
          console.log("you lose! ${computerSelection} beats ${humanSelection}");
      }
  } 

  
  if(humanScore > computerScore){
      console.log('\nYou are even ${humanScore}-${computerScore}! Wanna try again?`);
  }
  else if(humanScore === computerScore){
      console.log(`\nYou are even ${humanScore}-${computerScore}! Wanna try again?`);
  }
  else{
      console.log(`\nYou lost ${humanScore}-${computerScore}! Wanna try again?`);
  }
}

playGame();


 
 



 
 
 