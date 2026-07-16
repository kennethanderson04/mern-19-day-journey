// ============================================================
// SECTION 1: Show / Hide Password
// ============================================================
const showPass = document.getElementById("showPass");
const passField = document.getElementById("pass");

showPass.addEventListener("change", function () {
  if (showPass.checked) {
    passField.type = "text";
  } else {
    passField.type = "password";
  }
});


// ============================================================
// SECTION 2: Form Elements & Message Area
// ============================================================
const form = document.getElementById("loginForm");
const usernameField = document.getElementById("username");
const emailField = document.getElementById("mail");
const message = document.getElementById("message");


// ============================================================
// SECTION 3: Form Validation (runs on Submit)
// ============================================================
form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop page refresh

  // trim() removes extra spaces typed by mistake
  const username = usernameField.value.trim();
  const email = emailField.value.trim();
  const password = passField.value.trim();

  // Empty field check
  if (username === "" || email === "" || password === "") {
    message.textContent = "Please fill in all required fields.";
    message.style.color = "red";
    return;
  }

  // Username validation
  if (username.length < 3) {
    message.textContent = "Username must be at least 3 characters.";
    message.style.color = "red";
    return;
  }

  // Email validation using includes()
  if (!email.includes("@") || !email.includes(".")) {
    message.textContent = "Please enter a valid email address.";
    message.style.color = "red";
    return;
  }

  // Password length check
  if (password.length < 6) {
    message.textContent = "Password must be at least 6 characters.";
    message.style.color = "red";
    return;
  }


  // ==========================================================
  // SECTION 4: Object Example
  // ==========================================================
  const user = {
    username: username,
    email: email
  };
  console.log("Logged in user object:", user);


  // ==========================================================
  // SECTION 5: Success Message (DOM manipulation, no alert())
  // ==========================================================
  // toUpperCase() used here as the string method demo
  message.textContent = "Welcome, " + user.username.toUpperCase() + "! Login successful.";
  message.style.color = "green";
});


// ============================================================
// SECTION 6: Reset Button
// ============================================================
const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", function () {
  form.reset();
  message.textContent = "";
  passField.type = "password";
  showPass.checked = false;
});