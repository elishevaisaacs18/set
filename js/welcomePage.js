document.getElementById('link-to-game').addEventListener(onload, disableLink)
function disableLink (event){
    event.preventDefault();
}
document.getElementById('sign-in-btn').addEventListener('click', accessAccount)

//! i would like to go throgh this function with you
function accessAccount() {
    const userNameInput = document.getElementById('uname').value;
    const passwordInput = document.getElementById('pass').value;

    if (localStorage.getItem(userNameInput) === null) {
        document.getElementById('alert-mistakeOrNoaccount').textContent = 'your username is incorrect or you dont have have an account, creat one down below'
        document.getElementById('alert-mistakeOrNoaccount').classList[0].remove;
    }
    else {
        let user = JSON.parse(localStorage.getItem(userNameInput));
        console.log(user)
        if (user.userName === userNameInput && user.password === passwordInput) {
            /*var newlink = document.createElement('a');
            newlink.setAttribute('href', 'gamePage.html')
            document.getElementById('sign-in-btn').appendChild(newlink);*/
            document.getElementById('link-to-game').removeEventListener(onload, disableLink);
        }
        else {
            document.getElementById('alert-mistakeOrNoaccount').textContent = 'your password is incorrect'
            document.getElementById('alert-mistakeOrNoaccount').classList[0].remove;
        }
    }
}

