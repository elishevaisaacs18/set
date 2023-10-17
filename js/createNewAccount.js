function User(email, userName, password){
    this.email=email;
    this.userName=userName;
    this.password=password;
}


document.getElementById('sign-up-btn').addEventListener('click', saveUser)

function saveUser(){
    let email=document.getElementById('email').value;
    let userName=document.getElementById('uname').value;
    let password=document.getElementById('pass').value;
    
    localStorage.setItem(userName,JSON.stringify(new User(email, userName, password)))
    
}

document.getElementById('sign-up-btn').addEventListener('click', saveUser)