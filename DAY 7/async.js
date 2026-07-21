const form = document.getElementById("loginForm");

const usernameField = document.getElementById("username");
const emailField = document.getElementById("mail");
const passField = document.getElementById("pass");

const showPass = document.getElementById("showPass");
const resetBtn = document.getElementById("resetBtn");
const message = document.getElementById("message");

//validation functions
function isUsernameValid(username){
    return username.length >= 3;
}

function isEmailValid(email){
    return email.includes("@") && email.includes(".");
}

function isPasswordValid(password){
    return password.length >= 6;
}

//show password
showPass.addEventListener("change",function(){
    if(showPass.checked){
        passField.type = "text";
    }
    else{
        passField.type = "password";
    }
});

//async js - promise
function loginUser(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Login Successful!");
        },2000);
    });
}

async function performLogin(user){
    message.textContent = "Logging in...";

    const result = await loginUser();

    message.textContent = "Welcome " + user.username.toUpperCase() + "! " + result;
}

//form submission
form.addEventListener("submit",function(event){
    event.preventDefault();

    const username = usernameField.value.trim();
    const email = emailField.value.trim();
    const password = passField.value.trim();

    if(username  === "" || email === "" || password === ""){
        message.textContent = "please fill all fields";
        return;
    }

    if(!isUsernameValid){
        message.textContent = "name must have 3 letters atleast";
        return;
    }

    if(!isEmailValid){
        message.textContent = "invalid email";
        return;
    }

    if(!isPasswordValid){
        message.textContent = "passsword must be atleast 6 characters long.";
        return;
    }

    const user = {
        username : username,
        email : email
    };

    performLogin(user);
});

//reset
resetBtn.addEventListener("click",function(){
    form.reset();

    message.textContent = "";
    passField.type = "password";
    showPass.checked = false;
});