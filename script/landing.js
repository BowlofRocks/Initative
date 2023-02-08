const registerBtn = document.querySelector("#register-btn");
const signInButton = document.querySelector("#sign-in-button");

const registerHandler = () => {
    window.location.replace("http://localhost:8080/initiative.html")
}

const signInHandler = () => {
    return alert("Bleh");
}

registerBtn.addEventListener('click', registerHandler);
signInButton.addEventListener('click', signInHandler);


