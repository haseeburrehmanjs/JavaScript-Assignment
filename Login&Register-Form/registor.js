let form = document.querySelector('form')
let fullName = document.querySelector('#full-name')
let email = document.querySelector('#email')
let Password = document.querySelector('#password')

// EMAIL PASSWORD REGEX VALIDATION
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
let passwordRegex = /^[a-zA-Z0-9!@#$%^&*()_+]{8,15}$/

// PASSWORD VISIBILITY
function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

// USER REGISTOR DATA
let registorData = []
let localData;

let checkDetails = ()=> {
    if(getData[0].email === email.value){
        alert('this email is already registor ')
    }
}

// SEND LOCALSTORAGE
function PushData() {
    localData = localStorage.setItem('sendData', JSON.stringify(registorData))
}

form.addEventListener('submit', event => {
    event.preventDefault()
    if (emailRegex.test(email.value) && passwordRegex.test(Password.value)) {
        registorData.push({
            fullName: fullName.value,
            email: email.value,
            Password: Password.value,
        })
        alert('Registor SuccesFull')
        // window.location = 'index.html'
        PushData()
    }else {
        alert('Password Pattern Incorrect');
    }

})





















