let randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
  let userGuess = document.getElementById("guess").value;
  let result = document.getElementById("result");

  if (userGuess == randomNumber) {
    result.textContent = "Congratulations! You guessed the number!";
  } else {
    result.textContent = "Not matched. Try again!";
  }
}
let items = [];

function addItem() {
  let input = document.getElementById("itemInput");
  let list = document.getElementById("list");

  if (input.value !== "") {
    items.push(input.value);

    let li = document.createElement("li");
    li.textContent = input.value;
    list.appendChild(li);

    input.value = "";
  }
}
