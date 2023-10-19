document.getElementById('sign-in-btn').addEventListener('click', accessAccount)

//! i would like to go throgh this function with you
function accessAccount() {
    const userNameInput = document.getElementById('uname').value;
    const passwordInput = document.getElementById('pass').value;

    if (localStorage.getItem(userNameInput) === null) {
        document.getElementsByClassName('alert-mistakeOrNoaccount').textContent = 'your username is incorrect or you dont have have an account, creat one down below'
        document.getElementsById('P').classList[0].remove;
        setTimeout(deleteMassage, 7000)

    }
    else {
        let user = JSON.parse(localStorage.getItem(userNameInput));
        console.log(user)
        if (user.userName === userNameInput && user.password === passwordInput) {
            window.location.assign("gamePage.html");
        }
        else {
            document.getElementsByClassName('alert-mistakeOrNoaccount').textContent = 'your password is incorrect'
            document.getElementsById('P').classList[0].remove;
            setTimeout(deleteMassage, 10000); 
        }
    }
}
function deleteMassage(){
    document.getElementById('P').classList.add('alert-mistakeOrNoaccount');
}
