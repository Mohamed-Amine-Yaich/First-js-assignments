const choice = ["Rock", "Paper", "Scissors"];

const computerPlay = () => {
  const random = Math.floor(Math.random() * 3);
  return choice[random];
};

const playerSelectionFunction = () => {
  let input = "";
  while (true) {
    /*  console.log(input); */
    input = prompt("Select between Rock Paper and Scissors");
    input = input.toLowerCase().replace(/\b[a-z]/g, function (letter) {
      return letter.toUpperCase();
    });
    if (choice.includes(input)) {
      return input;
    }
  }
};

const playRound = (playerSelection, computerSelection) => {
  console.log("Player selection : ", playerSelection);
  console.log("computer selection : ", computerSelection);

  if (
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissors" && computerSelection == "Paper")
  ) {
    return "You Win" /*  `You win!!${playerSelection} beats ${computerSelection}` */;
  } else if (playerSelection == computerSelection) {
    return "equality";
  } else {
    return "You Lose" /*  `You Lose!!${computerSelection} beats ${playerSelection}` */;
  }
};

const playerSelection = playerSelectionFunction();
const computerSelection = computerPlay();
console.log("game of one round go..");
console.log(playRound(playerSelection, computerSelection));

const game = () => {
  console.log(
    "the game is starting you have 5 round to beat the computer go.."
  );
  let equality = 0;
  let roundPlayerWon = 0;
  let roundComputerWon = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = playerSelectionFunction();
    const computerSelection = computerPlay();
    const roundScore = playRound(playerSelection, computerSelection);
    console.log(roundScore);

    if (roundScore == "You Win") {
      roundPlayerWon++;
    } else if (roundScore == "You Lose") {
      roundComputerWon++;
    } else if (roundScore == "equality") {
      equality++;
    }
  }

  if (roundPlayerWon > roundComputerWon) {
    return `You win the game : your win ${roundPlayerWon}and lose${roundComputerWon}and equal round are ${equality} `;
  } else if (roundPlayerWon == roundComputerWon) {
    return `equality : your win ${roundPlayerWon} and lose ${roundComputerWon}and equal round are ${equality} `;
  } else {
    return `You lose the game : your win ${roundPlayerWon} round and lose ${roundComputerWon} and equal round are ${equality} `;
  }
};
/* console.log(game()); */
