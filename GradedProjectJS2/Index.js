localStorage.setItem("username", "prajyotiSabale@gmail.com");
localStorage.setItem("password", "2102");

let username = document.getElementById("username");
let password = document.getElementById("password");
let message = document.querySelector(".message");

let isInvalid = false;

username.addEventListener("textInput", userVerify);
password.addEventListener("textInput", passVerify);

function validated(e) {
  e.preventDefault(e);
  clearError();

  if (username.value === "") {
    showError("Please enter the username");
    username.focus();
    return false;
  }

  if (password.value === "") {
    showError("Please enter the password");
    password.focus();
    return false;
  }

  if (username.value == localStorage.getItem("username")) {
    if (password.value == localStorage.getItem("password")) {
      isInvalid = false;
      window.location.href = "Resume.html";
    } else {
      showError("Incorrect password");
      isInvalid = true;
      password.focus();
      return false;
    }
  } else {
    showError("Invalid username");
    isInvalid = true;
    username.focus();
    return false;
  }
}

function showError(errorMessage) {
  message.style.visibility = "visible";
  message.innerText = errorMessage;
}

function clearError() {
  message.style.visibility = "hidden";
}

function userVerify() {
  if (username.value !== "" && isInvalid === false) {
    message.style.visibility = "hidden";
    return true;
  }
}

function passVerify() {
  if (password.value !== "" && isInvalid === false) {
    message.style.visibility = "hidden";
    return true;
  }
}

function preventBack() {
  window.history.forward();
}

setTimeout("preventBack()", 0);
window.onunload = function () {
  null;
};
