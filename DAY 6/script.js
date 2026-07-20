// Form Elements
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
const pageBody = document.querySelector("body");

let isDarkMode = false;

// Character Counter (Event Handling + DOM)
usernameField.addEventListener("input", function () {
  charCount.textContent = usernameField.value.length + "/20 characters";
});

// Dark Mode (CSS Manipulation + DOM)
darkModeBtn.addEventListener("click", function () {
  isDarkMode = !isDarkMode;
  pageBody.style.backgroundColor = isDarkMode ? "black" : "white";
  pageBody.style.color = isDarkMode ? "white" : "black";
  darkModeBtn.textContent = isDarkMode ? "Toggle Light Mode" : "Toggle Dark Mode";
});

// Show / Hide Password (Event Handling)
showPass.addEventListener("change", function () {
  passField.type = showPass.checked ? "text" : "password";
});

// Validation (Functions + Conditions)
function isUsernameValid(username) {
  return username.length >= 3;
}

function isEmailValid(email) {
  return email.includes("@") && email.includes(".");
}

function isPasswordValid(password) {
  return password.length >= 6;
}

function areFieldsFilled(fields) {
  for (let field of fields) {
    if (field.trim() === "") return false;
  }
  return true;
}

// Simulated Login (setTimeout + Promise + resolve/reject)
function loginRequest(user) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (isPasswordValid(user.password) && isUsernameValid(user.username) && isEmailValid(user.email)) {
        resolve("Login successful!");
      } else {
        reject("Invalid username or password.");
      }
    }, 1500);
  });
}

// Successful Login (Objects + DOM Manipulation)
function showUserCard(user) {
  const oldCard = document.getElementById("successCard");
  if (oldCard) oldCard.remove();

  const card = document.createElement("div");
  card.id = "successCard";
  card.innerHTML = `<p>Username: ${user.username}</p><p>Email: ${user.email}</p>`;
  document.querySelector("main").append(card);
}

// Form Submit (Async/Await + Try/Catch)
form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const username = usernameField.value.trim();
  const email = emailField.value.trim();
  const password = passField.value.trim();

  if (!areFieldsFilled([username, email, password])) {
    message.textContent = "Please fill in all required fields.";
    return;
  }
  if (!isUsernameValid(username)) {
    message.textContent = "Username must be at least 3 characters.";
    return;
  }
  if (!isEmailValid(email)) {
    message.textContent = "Please enter a valid email address.";
    return;
  }
  if (!isPasswordValid(password)) {
    message.textContent = "Password must be at least 6 characters.";
    return;
  }

  const user = { username: username, email: email, password: password };
  message.textContent = "Logging in...";

  try {
    const result = await loginRequest(user);
    message.textContent = result;
    userInfo.textContent = "Welcome, " + user.username.toUpperCase() + "!";
    showUserCard(user);
  } catch (error) {
    message.textContent = error;
    userInfo.textContent = "";
  }
});

// Reset Functionality (Form Handling)
resetBtn.addEventListener("click", function () {
  form.reset();
  message.textContent = "";
  userInfo.textContent = "";
  charCount.textContent = "0/20 characters";
  passField.type = "password";
  showPass.checked = false;
  const oldCard = document.getElementById("successCard");
  if (oldCard) oldCard.remove();
});

//password strength checker
const strength = document.getElementById("strength");

passField.addEventListener("input",function(){
  const password = passField.value;
  let strengthtext = "";
  
  if(password.length === 0){
    strengthtext = "";

  }
  else if(password.length <= 6){
    strengthtext = "weak";
  }
  else if(password.length >= 6 && password.length < 10){
    strengthtext = "Medium";
  }
  else{
    strengthtext = "Strong"
  }

  strength.textContent = strengthtext;
});