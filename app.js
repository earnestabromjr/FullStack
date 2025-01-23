const main = document.querySelector("main");
const userEmail = document.querySelector("#id");
const submitButton = document.querySelector("#submit");

submitButton.addEventListener("click", getInput(userEmail.textContent));
function getInput(input) {
  return input.value;
}

console.log(main.innerText);
