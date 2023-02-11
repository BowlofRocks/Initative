const registerBtn = document.querySelector("#register-btn");
const signInButton = document.querySelector("#sign-in-button");
const hideHeader = document.querySelector("header");
const hideFooter = document.querySelector("footer");
const hideAbout = document.querySelectorAll("section");


const registerHandler = () => {
    
}

const signInHandler = () => {
    
}

function signInOpenForm() {
    document.getElementById("snForm").style.display = "block";
    hideHeader.classList.add("gray-sign-in");
    hideFooter.classList.add("gray-sign-in");
    hideAbout.classList.add("gray-sign-in");
  }
  
function signInCloseForm() {
    document.getElementById("snForm").style.display = "none";
    hideHeader.classList.remove("gray-sign-in");
    hideFooter.classList.remove("gray-sign-in");
    hideAbout.classList.remove("gray-sign-in");
  }

function rgstrOpenForm() {
    document.getElementById("rgstrForm").style.display = "block";
    hideHeader.classList.add("gray-sign-in");
  }
  
function rgstrCloseForm() {
    document.getElementById("rgstrForm").style.display = "none";
    hideHeader.classList.remove("gray-sign-in");
  }

registerBtn.addEventListener('click', registerHandler);
signInButton.addEventListener('click', signInHandler);


