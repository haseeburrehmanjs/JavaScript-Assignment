let userName = document.querySelector('#userName')
let email = document.querySelector('#email')
let nicNumber = document.querySelector('#nicNumber')
let password = document.querySelector('#password')
let btn = document.querySelector('#btn')

let regex = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,8}$/
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
let nicRegex = /^42\d{11}$/
let passwordRegex = /^[a-zA-Z0-9!@#$%^&*()_+]{8,15}$/


btn.addEventListener('submit', function(event){
    event.preventDefault()
    if(regex.test(userName.value)){
        console.log(userName.value);
    }
    if(emailRegex.test(email.value)){
        console.log(email.value);
    }
    if(nicRegex.test(nicNumber.value)){
        console.log(nicNumber.value);
    }
    if(passwordRegex.test(password.value)){
        console.log(password.value);
    }

    userName.value = ''
    email.value = ''
    password.value = ''
    nicNumber.value = ''
})