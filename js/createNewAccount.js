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