document.getElementById('sign-in-btn').addEventListener('click', accessAccount)

//! i would like to go throgh this function with you
function accessAccount() {
    const userNameInput = document.getElementById('uname').value;
    const passwordInput = document.getElementById('pass').value;
    if (userNameInput === '' || passwordInput === '') {
        showMistakeMessage('Please put in the required fields', 3000);
    }
    else if (localStorage.getItem(userNameInput) === null) {
        showMistakeMessage('Your username or password is incorrect or you dont have have an account, creat one down below', 5000);
    }
    else {
        let user = JSON.parse(localStorage.getItem(userNameInput));
        console.log(user)
        if (user.userName === userNameInput && user.password === passwordInput) {
            user.conected = true;
            localStorage.setItem(user.userName , JSON.stringify(user));
            window.location.assign("gamePage.html");
        }
        else {
        showMistakeMessage('Your username or password is incorrect or you dont have have an account, creat one down below', 5000);
        }
    }
}

function deleteMassage() {
    document.getElementById('mistake-alert').classList.add('hidden');
}

const showMistakeMessage = (message, time) => {
    const messageElement = document.getElementById('mistake-alert');
    messageElement.textContent = message;
    messageElement.classList.remove('hidden');
    setTimeout(deleteMassage, time);
}
