const main = document.querySelector("main");
const submitButton = document.querySelector("#submit");

submitButton.addEventListener("click", getInput);

function getInput(event) {
  event.preventDefault();
  const userEmail = document.querySelector("#email").value;
  userPassword = document.querySelector("#password").value;
  if (!userEmail || !userPassword) {
    alert("Please fill in both email and password.");
    return;
  }

  // Store in localStorage(demo purposes only insecure for passwords)
  localStorage.setItem("userEmail", userEmail);
  localStorage.setItem("userPassword", userPassword);

  //Better logging
  console.log("Email:", userEmail, "Password:", userPassword);

  // Show success (temp for debugging)
}
