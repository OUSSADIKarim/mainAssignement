const computerPlay = () => {
  let random = Math.floor(Math.random() * 3);
  switch (random) {
    case 0:
      return "Rock";
      break;
    case 1:
      return "Paper";
      break;
    default:
      return "Scissors";
      break;
  }
};

let computerSelcetion;
let playerSelection = "rock";
let compWin = 0,
  playerWin = 0;

const playRound = (playerSelection, computerSelcetion) => {
  playerSelection = playerSelection.toLowerCase();
  computerSelcetion = computerSelcetion.toLowerCase();

  if (computerSelcetion === playerSelection) {
    return null;
  }

  if (computerSelcetion === "rock") {
    if (playerSelection === "paper") {
      return true;
    } else if (playerSelection === "scissors") return false;
  } else if (computerSelcetion === "paper") {
    if (playerSelection === "rock") {
      return false;
    } else if (playerSelection === "scissors") return true;
  } else {
    if (playerSelection === "rock") {
      return true;
    } else if (playerSelection === "paper") return false;
  }
};

const game = (compWin, playerWin, playerSelection, computerSelcetion) => {
  for (let i = 0; i < 5; i++) {
    playerSelection = prompt(
      `Choose a command (rock, scissors, paper) \n ${compWin}, ${playerWin}`
    );
    while (
      playerSelection !== "rock" &&
      playerSelection !== "scissors" &&
      playerSelection !== "paper"
    ) {
      alert("command not found, type a valid command");
      playerSelection = prompt(
        `Choose a command (rock, scissors, paper) \n ${compWin}, ${playerWin}`
      );
    }
    computerSelcetion = computerPlay();
    let result = playRound(playerSelection, computerSelcetion);
    if (result === true) {
      playerWin++;
    } else if (result === false) {
      compWin++;
    }
  }
  if (playerWin > compWin) {
    console.log(`you won by (${playerWin} - ${compWin})`);
  } else if (playerWin < compWin) {
    console.log(`you lost by (${playerWin} - ${compWin})`);
  } else {
    console.log(`the result is null: (${playerWin} - ${compWin})`);
  }
};

game(compWin, playerWin, playerSelection, computerSelcetion);
