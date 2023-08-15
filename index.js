const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const loginButton = document.getElementById("login-button");
const signupButton = document.getElementById("signup-button");

loginButton.addEventListener("click", function() {
    loginForm.style.display = "block";
   signupForm.style.display = "none";
    
});

signupButton.addEventListener("click", function() {
    signupForm.style.display = "block";
    loginForm.style.display = "none";
    
});
