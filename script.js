let turn = "x";
let title = document.querySelector(".title");
let squares = [];
const game = (id) => {
  const element = document.getElementById(id);
  if (turn === "x" && element.innerHTML == "") {
    element.innerHTML = "x";
    turn = "o";
    title.innerHTML = "o Turn";
  } else if (turn === "o" && element.innerHTML == "") {
    element.innerHTML = "o";
    turn = "x";
    title.innerHTML = "x Turn";
  }
  theWinner();
};
function detect(num1, num2, num3) {
  title.innerHTML = `${squares[num1]} is winner`;
  document.getElementById("item" + num1).style.background = "green";
  document.getElementById("item" + num2).style.background = "green";
  document.getElementById("item" + num3).style.background = "green";
  setInterval(() => {
    title.innerHTML += ".";
  }, 1000);
  setTimeout(() => {
    location.reload();
  }, 3000);
}
const theWinner = () => {
  for (let i = 1; i < 10; i++) {
    squares[i] = document.getElementById(`item` + i).innerHTML;
  }

  if (
    squares[1] == squares[2] &&
    squares[2] == squares[3] &&
    squares[2] != ""
  ) {
    detect(1, 2, 3);
  } else if (
    squares[4] == squares[5] &&
    squares[5] == squares[6] &&
    squares[5] != ""
  ) {
    detect(4, 5, 6);
  } else if (
    squares[7] == squares[8] &&
    squares[8] == squares[9] &&
    squares[8] != ""
  ) {
    detect(7, 8, 9);
  } else if (
    squares[1] == squares[4] &&
    squares[4] == squares[7] &&
    squares[1] != ""
  ) {
    detect(1, 4, 7);
  } else if (
    squares[2] == squares[5] &&
    squares[5] == squares[8] &&
    squares[5] != ""
  ) {
    detect(2, 5, 8);
  } else if (
    squares[3] == squares[6] &&
    squares[6] == squares[9] &&
    squares[6] != ""
  ) {
    detect(3, 6, 9);
  } else if (
    squares[3] == squares[5] &&
    squares[5] == squares[7] &&
    squares[5] != ""
  ) {
    detect(3, 5, 7);
  }
};
