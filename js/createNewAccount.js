function User(email, userName, password) {
    this.email = email;
    this.userName = userName;
    this.password = password;
}

document.getElementById('sign-up-btn').addEventListener('click', saveUser)//!why do you have this twice?

function saveUser() {
    const email = document.getElementById('email').value;
    const userName = document.getElementById('uname').value;
    const password = document.getElementById('pass').value;
    localStorage.setItem(userName, JSON.stringify(new User(email, userName, password)))
}

const checkValidation = (elementId, regex, messageId) => {
    const message = document.getElementById(messageId);
    const inputElement = document.getElementById(elementId);

    if (!regex.test(inputElement.value)) {
        message.classList.add("show");
    } else {
        if (message.classList.contains('show')) {
            message.classList.remove('show');
        }
    }
}

const comfirmPass = () => {
    const message = document.getElementById("confirm-pass-error-check");
    if(document.getElementById('pass').value !== 
    document.getElementById('confirm-pass').value) {
        message.classList.add("show");
    } else {
        if (message.classList.contains('show')) {
            message.classList.remove('show');
        }
    }
}

document.getElementById("email").addEventListener('input', () => {
    checkValidation("email", /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "email-error-check");
});

document.getElementById("uname").addEventListener('input', () => {
    checkValidation("uname", /^[A-Za-z0-9]{4,}$/, "uname-error-check");
});

document.getElementById("pass").addEventListener('input', () => {
    checkValidation("pass", /^(?=.*[A-Z])(?=.*\d).{8,}$/, "pass-error-check");
});

document.getElementById("confirm-pass").addEventListener('input', comfirmPass);



