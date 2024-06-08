// GET LOCALSTORAGE 
let getData = JSON.parse(localStorage.getItem('sendData'))
console.log(getData);

// HTML ELEMENT IN JAVASCRIPT
let email = document.querySelector('#email')
let Password = document.querySelector('#password')
let form = document.querySelector('#form')

// PASSWORD VISIBILITY
function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

// USER LOGIN
form.addEventListener('submit', event => {
    event.preventDefault()
    if (getData[0].email === email.value && getData[0].Password === Password.value) {
        alert('Login SuccesFull')
        window.location = 'quiz.html'
    } else {
        alert('Please Check Email And Password')
    }
})
