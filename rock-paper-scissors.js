let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};
updateScore();

function computerPick() {
  const num1 = Math.random();
  let PC = "";
  if (num1 >= 0 && num1 < 1 / 3) {
    PC = "rock";
  } else if (num1 >= 1 / 3 && num1 < 2 / 3) {
    PC = "paper";
  } else {
    PC = "scissors";
  }

  return PC;
}

function playGame(playerPick) {
  const PC = computerPick();
  let result = "";
  if (playerPick === "rock") {
    if (PC === "scissors") {
      result = "You win!";
    } else if (PC === "rock") {
      result = "Tie";
    } else if (PC === "paper") {
      result = "You lose";
    }
  } else if (playerPick === "paper") {
    if (PC === "scissors") {
      result = "You lose";
    } else if (PC === "rock") {
      result = "You win!";
    } else if (PC === "paper") {
      result = "Tie";
    }
  } else if (playerPick === "scissors") {
    if (PC === "scissors") {
      result = "Tie";
    } else if (PC === "rock") {
      result = "You lose";
    } else if (PC === "paper") {
      result = "You win!";
    }
  }

  if (result === "You win!") {
    score.wins += 1;
  } else if (result === "You lose") {
    score.losses += 1;
  } else if (result === "Tie") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));
  updateScore();
  //   alert(
  //     `You picked ${playerPick}, computer picked ${PC}, ${result}.
  // wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`
  //   );

  document.querySelector(".result").innerHTML = result;
  document.querySelector(".picks").innerHTML = `
  <div style="display: flex;  justify-content: center">
  <div>
  <img style="width: 45%; height: 60%" src="rock-paper-scssisors-images/${playerPick}-emoji.png" />
  <p style="font-size: 20px">You</p>
  </div>
   <div>
  <img style="width: 45%; height: 60%" src="rock-paper-scssisors-images/${PC}-emoji.png" />
  <p style="font-size: 20px">Computer</p>
  </div>
  </div>
  `;
}

function updateScore() {
  document.querySelector(
    ".score"
  ).innerHTML = `wins: ${score.wins}, losses: ${score.losses} ,ties: ${score.ties}`;
}
