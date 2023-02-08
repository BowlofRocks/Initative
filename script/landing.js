const registerBtn = document.querySelector("#register-btn");
const signInButton = document.querySelector("#sign-in-button");

const registerHandler = () => {
    window.location.replace("https://bowlofrocks.github.io/Initative/initiative.html")
}

const signInHandler = () => {
    return alert("Bleh");
}

registerBtn.addEventListener('click', registerHandler);
signInButton.addEventListener('click', signInHandler);


