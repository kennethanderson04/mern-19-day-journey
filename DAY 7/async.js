// Form Elements

const form = document.getElementById("loginForm");
const usernameField = document.getElementById("username");
const emailField = document.getElementById("mail");
const passField = document.getElementById("pass");

const showPass = document.getElementById("showPass");
const resetBtn = document.getElementById("resetBtn");
const message = document.getElementById("message");


// Validation Functions

function isUsernameValid(username) {
    return username.length >= 3;
}


function isEmailValid(email) {
    return email.includes("@") &&
           email.includes(".");
}


function isPasswordValid(password) {
    return password.length >= 6;
}


// Show Password

showPass.addEventListener("change", function () {

    if (showPass.checked) {
        passField.type = "text";
    }

    else {
        passField.type = "password";
    }

});


// Async JavaScript

function loginUser() {

    return new Promise(function (resolve) {

        setTimeout(function () {

            resolve("Login Successful!");

        }, 2000);

    });

}


async function performLogin(user) {

    message.textContent = "Logging In.....";

    const result = await loginUser();

    message.textContent =
        "Welcome " +
        user.username.toUpperCase() +
        "! " +
        result;

}


// Form Submission

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const username = usernameField.value.trim();
    const email = emailField.value.trim();
    const password = passField.value.trim();


    if (username === "" ||
        email === "" ||
        password === "") {

        message.textContent =
            "Please fill all the fields.";

        return;
    }


    if (!isUsernameValid(username)) {

        message.textContent =
            "Username must contain at least 3 characters.";

        return;
    }


    if (!isEmailValid(email)) {

        message.textContent =
            "Invalid Email.";

        return;
    }


    if (!isPasswordValid(password)) {

        message.textContent =
            "Password must contain at least 6 characters.";

        return;
    }


    // Object Example

    const user = {

        username: username,
        email: email

    };


    performLogin(user);

});


// Reset Form

resetBtn.addEventListener("click", function () {

    form.reset();

    message.textContent = "";

    passField.type = "password";

    showPass.checked = false;

});