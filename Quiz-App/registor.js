let form = document.querySelector('form')
let fullName = document.querySelector('#full-name')
let email = document.querySelector('#email')
let Password = document.querySelector('#password')

// EMAIL PASSWORD REGEX VALIDATION
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
let passwordRegex = /^[a-zA-Z0-9!@#$%^&*()_+]{8,15}$/

// USER REGISTOR DATA
let registorData = []
let localData;

function PushData() {
    localData = localStorage.setItem('sendData', JSON.stringify(registorData))
    console.log(localData);
}

form.addEventListener('submit', event => {
    event.preventDefault()
    if (emailRegex.test(email.value) && passwordRegex.test(Password.value)) {
        registorData.push({
            fullName: fullName.value,
            email: email.value,
            Password: Password.value,
        })
        PushData()
    } else {
        alert('Password Pattern Incorrect');
    }
})





















