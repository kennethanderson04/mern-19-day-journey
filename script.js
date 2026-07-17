// SECTION: Form Elements
// getElementById() and querySelector() both select elements.
const form = document.getElementById("loginForm");
const usernameField = document.getElementById("username");
const emailField = document.getElementById("mail");
const passField = document.getElementById("pass");
const showPass = document.getElementById("showPass");
const resetBtn = document.getElementById("resetBtn");
const darkModeBtn = document.getElementById("darkModeBtn");
const charCount = document.getElementById("charCount");
const message = document.getElementById("message");
const userInfo = document.getElementById("userInfo");
const pageTitle = document.querySelector("h1");   
const pageBody = document.querySelector("body"); 


let isDarkMode = false;


// SECTION: Validations
// Each function checks ONE thing and returns true/false.
// If invalid, it also changes the field's border color
// (style manipulation)

function isUsernameValid(username) {
  if (username.length < 3) {
    usernameField.style.borderColor = "red";
    return false;
  }
  usernameField.style.borderColor = "green";
  return true;
}

function isEmailValid(email) {
  // includes() is a string method: checks if text contains a value
  if (!email.includes("@") || !email.includes(".")) {
    emailField.style.borderColor = "red";
    return false;
  }
  emailField.style.borderColor = "green";
  return true;
}

function isPasswordValid(password) {
  if (password.length < 6) {
    passField.style.borderColor = "red";
    return false;
  }
  passField.style.borderColor = "green";
  return true;
}

function areFieldsFilled() {
  // Array of fields lets us loop through them instead of
  // writing the same check three separate times.
  const requiredFields = [usernameField, emailField, passField];

  for (let field of requiredFields) {
    if (field.value.trim() === "") {
      return false;
    }
  }
  return true;
}


// SECTION: DOM Manipulation (Welcome Message)
function showWelcomeMessage(user) {
  // textContent: safely displays plain text
  message.textContent = "Welcome, " + user.username.toUpperCase() + "!";
  message.style.color = "green";

  // innerHTML + template literal: displays text with basic HTML formatting
  userInfo.innerHTML = `<strong>Username:</strong> ${user.username} <br> <strong>Email:</strong> ${user.email}`;
}


// SECTION: Successful Login Message (dynamic card)
function showSuccessCard(user) {
  removeSuccessCard(); // remove any old card first, so they don't stack up

  const card = document.createElement("div");
  card.id = "successCard";
  card.style.border = "2px solid green";
  card.style.padding = "10px";
  card.style.marginTop = "10px";
  card.style.backgroundColor = "#e6ffe6";

  card.innerHTML = `<p>Login successful!</p>
                     <p>Username: ${user.username}</p>
                     <p>Email: ${user.email}</p>`;

  document.querySelector("main").append(card);
}

function removeSuccessCard() {
  const oldCard = document.getElementById("successCard");
  if (oldCard) {
    oldCard.remove();
  }
}


// SECTION: Character Counter
function updateCharCount() {
  const currentLength = usernameField.value.length;
  charCount.textContent = currentLength + "/20 characters";
}


// SECTION: Dark Mode
function toggleDarkMode() {
  isDarkMode = !isDarkMode; // flip true/false

  if (isDarkMode) {
    pageBody.style.backgroundColor = "black";
    pageBody.style.color = "white";
    pageTitle.style.color = "white";
    darkModeBtn.textContent = "Toggle Light Mode";
  } else {
    pageBody.style.backgroundColor = "white";
    pageBody.style.color = "black";
    pageTitle.style.color = "black";
    darkModeBtn.textContent = "Toggle Dark Mode";
  }
}


// SECTION: Reset Functionality
function resetForm() {
  form.reset();
  message.textContent = "";
  userInfo.textContent = "";
  charCount.textContent = "0/20 characters";
  passField.type = "password";
  showPass.checked = false;

  // Put border colors back to normal
  usernameField.style.borderColor = "";
  emailField.style.borderColor = "";
  passField.style.borderColor = "";

  removeSuccessCard();
}


// SECTION: Event Listeners
showPass.addEventListener("change", function () {
  passField.type = showPass.checked ? "text" : "password";
});

usernameField.addEventListener("input", updateCharCount);

darkModeBtn.addEventListener("click", toggleDarkMode);

resetBtn.addEventListener("click", resetForm);

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop the page from refreshing

  const username = usernameField.value.trim();
  const email = emailField.value.trim();
  const password = passField.value.trim();

  if (!areFieldsFilled()) {
    message.textContent = "Please fill in all required fields.";
    message.style.color = "red";
    return;
  }

  if (!isUsernameValid(username)) {
    message.textContent = "Username must be at least 3 characters.";
    message.style.color = "red";
    return;
  }

  if (!isEmailValid(email)) {
    message.textContent = "Please enter a valid email address.";
    message.style.color = "red";
    return;
  }

  if (!isPasswordValid(password)) {
    message.textContent = "Password must be at least 6 characters.";
    message.style.color = "red";
    return;
  }

  // Object example: groups related data together
  const user = {
    username: username,
    email: email
  };
  console.log("Logged in user object:", user);

  showWelcomeMessage(user);
  showSuccessCard(user);
});