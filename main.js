let computerSelcetion,
  playerSelection = "",
  compWin = 0,
  playerWin = 0;

const computerPlay = () => {
  let random = Math.floor(Math.random() * 3);
  switch (random) {
    case 0:
      computerSelcetion = "rock";
      break;
    case 1:
      computerSelcetion = "paper";
      break;
    default:
      computerSelcetion = "scissors";
  }
};

const getPlayerSelection = (round) => {
  playerSelection = prompt(
    `Round: ${round}\nChoose a command (rock, scissors, paper\nScore:\nYou: ${playerWin} | Computer: ${compWin}`
  )
    .toLowerCase()
    .replaceAll(" ", "");
};

const checkInvalidPlayerSelcetion = () => {
  while (
    playerSelection !== "rock" &&
    playerSelection !== "scissors" &&
    playerSelection !== "paper"
  ) {
    alert("command not found, type a valid command");
    getPlayerSelection();
  }
};

const playRound = (round) => {
  if (computerSelcetion === playerSelection) {
    alert(
      `Round ${round}\nComputer choice: ${computerSelcetion}\nIt's null\nScore:\nYou: ${playerWin} | Computer: ${compWin}`
    );
  } else if (computerSelcetion === "rock") {
    if (playerSelection === "paper") {
      playerWin++;
      alert(
        `Round ${round}\nComputer choice: ${computerSelcetion}\nYou won this round\nScore:\nYou: ${playerWin} | Computer: ${compWin}`
      );
    } else if (playerSelection === "scissors") {
      compWin++;
      alert(
        `Round ${round}\nComputer choice: ${computerSelcetion}\nYou lost this round\nScore:\nYou: ${playerWin} | Computer: ${compWin}`
      );
    }
  } else if (computerSelcetion === "paper") {
    if (playerSelection === "rock") {
      compWin++;
      alert(
        `Round ${round}\nComputer choice: ${computerSelcetion}\nYou lost this round\nScore:\nYou: ${playerWin} | Computer: ${compWin}`
      );
    } else if (playerSelection === "scissors") {
      playerWin++;
      alert(
        `Round ${round}\nComputer choice: ${computerSelcetion}\nYou won this round\nScore:\nYou: ${playerWin} | Computer: ${compWin}`
      );
    }
  } else {
    if (playerSelection === "rock") {
      playerWin++;
      alert(
        `Round ${round}\nComputer choice: ${computerSelcetion}\nYou won this round\nScore:\nYou: ${playerWin} | Computer: ${compWin}`
      );
    } else if (playerSelection === "paper") {
      compWin++;
      alert(
        `Round ${round}\nComputer choice: ${computerSelcetion}\nYou lost this round\nScore:\nYou: ${playerWin} | Computer: ${compWin}`
      );
    }
  }
};

const checkWinner = () => {
  if (playerWin > compWin) {
    alert(
      `Congratulations!\nYou won with score:\nYou: ${playerWin} | Computer: ${compWin}`
    );
  } else if (playerWin < compWin) {
    alert(
      `Sorry!\nYou lost with score:\nYou: ${playerWin} | Computer: ${compWin}`
    );
  } else {
    alert(
      `Almost!\nThe result is null with score:\nYou: ${playerWin} | Computer: ${compWin}`
    );
  }
  restart();
};

const welcome = () => {
  alert(
    "This is a rock, paper and scissors game.\nThe winner will be decided with 5 rounds.\nYou can choose your action/command by typing in the input box: rock, paper or scissors."
  );
};

const restart = () => {
  restart_answer = prompt(
    "Do you want to restart the game?\nNote: Type 'y' to restart or 'n' to quit."
  )
    .toLowerCase()
    .replaceAll(" ", "");
  if (restart_answer === "y") {
    compWin = 0;
    playerWin = 0;
    game();
  } else if (restart_answer === "n") {
    exit();
  } else {
    alert("command not found! Type 'y' to restart the game or 'no' to quit.");
    restart();
  }
};

const exit = () => {
  alert("Good Bye!");
  window.close();
};

const game = () => {
  welcome();
  for (let round = 1; round < 6; round++) {
    getPlayerSelection(round);
    checkInvalidPlayerSelcetion();
    computerPlay();
    playRound(round);
  }
  checkWinner();
};

game();
