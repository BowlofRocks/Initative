const registerBtn = document.querySelector("#register-btn");
const signInButton = document.querySelector("#sign-in-button");
const hideHeader = document.querySelector("header");
const hideFooter = document.querySelector("footer");
const hideAbout = document.querySelectorAll("section");
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var snForm = document.getElementById("snForm")

const registerHandler = () => {
  
}

const signInHandler = () => {
  
}
btn.onclick = function() {
  snForm.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
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



// Get the modal

// Get the button that opens the modal

// Get the <span> element that closes the modal

// When the user clicks the button, open the modal 

// When the user clicks on <span> (x), close the modal

// When the user clicks anywhere outside of the modal, close it