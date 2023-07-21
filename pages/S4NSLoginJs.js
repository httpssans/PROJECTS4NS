function togglePasswordVisibility() {
    let passwordInput = document.getElementById("password");
    let confirmPasswordInput = document.getElementById("confirmPassword");
    let showPasswordCheckbox = document.getElementById("showPassword");

    if (showPasswordCheckbox.checked) {
        passwordInput.type = "text";
        confirmPasswordInput.type = "text";
    } else {
        passwordInput.type = "password";
        confirmPasswordInput.type = "password";
    }
}


document.getElementById("password").addEventListener("input", validatePassword);
document.getElementById("confirmPassword").addEventListener("input", validatePassword);

function validatePassword() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let passwordMatch = (password === confirmPassword);
    setValidationState("password", passwordMatch);
    checkFormValidity();
}



function setValidationState(field, isValid) {
    let element = document.getElementById(field);
    if (isValid) {
        element.classList.remove("invalid");
        element.classList.add("valid");
        hideNotification();
    } else {
        element.classList.remove("valid");
        element.classList.add("invalid");
        showNotification();
    }
    checkFormValidity();
}



function checkFormValidity() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let registerButton = document.getElementById("registerBtn");
    let isFormValid =
        password === confirmPassword &&
        password.length > 0 &&
        confirmPassword.length > 0;
    registerButton.disabled = !isFormValid;
}



function showNotification() {
    let notification = document.getElementById("notification");
    notification.innerText = "Password does not match";
}




function hideNotification() {
    let notification = document.getElementById("notification");
    notification.innerText = "";
}