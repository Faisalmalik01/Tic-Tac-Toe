let buttons = document.querySelectorAll(".btn");
let resetBtn = document.querySelector("#reset");
let message = document.querySelector("h2");
let newGame = document.querySelector("#new");

let check = 0;
let winner = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (check == 0) {
      btn.innerHTML = "X";
      check = 1;
    } else {
      btn.innerHTML = "0";
      check = 0;
    }
    btn.disabled = true;

    checkWinner();
  });
});

let disableBtns = () => {
  for (let btn of buttons) {
    btn.disabled = true;
  }
};

let enableBtns = () => {
  for (let btn of buttons) {
    btn.disabled = false;
    btn.innerHTML = "";
    message.innerHTML = "";
  }
};

let resetGame = () => {
  check = 0;
  enableBtns();
};


let checkWinner = () => {

  let draw = true;

  for (let pattern of winner) {
    let pos1Val = buttons[pattern[0]].innerHTML;
    let pos2Val = buttons[pattern[1]].innerHTML;
    let pos3Val = buttons[pattern[2]].innerHTML;

    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        message.innerHTML = `${pos1Val} - You Won😇`;
        disableBtns();
        return;  // Exit early since a player has won
      }
    } else {
      draw = false;
    }
  }

  if (draw) {
    message.innerHTML = "It's a draw!";
    disableBtns();
  }
};

resetBtn.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);
