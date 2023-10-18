document.getElementById('sign-in-btn').addEventListener('click', accessAccount)

//! i would like to go throgh this function with you
function accessAccount() {
    const userNameInput = document.getElementById('uname').value;
    const passwordInput = document.getElementById('pass').value;

    if (localStorage.getItem(userName) !== null) {
        document.getElementById('alert-mistakeOrNoaccount').textContent = 'your username is incorrect or you dont have have an account, creat one down below'
        document.getElementById('alert-mistakeOrNoaccount').classList[0].remove;
    }
    else {
        let user = JSON.parse(localStorage.getItem(userName));
        if (user.userName === userNameInput && user.password === passwordInput) {
            var newlink = document.createElement('a');
            newlink.setAttribute('href', './welcomePage.html')
            document.getElementById('sign-in-btn').appendChild(newlink);
        }
        else {
            document.getElementById('alert-mistakeOrNoaccount').textContent = 'your password is incorrect'
            document.getElementById('alert-mistakeOrNoaccount').classList[0].remove;
        }
    }
}