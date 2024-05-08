let userInput = document.querySelector('#input1')
let times = document.querySelector('#input2')
let div = document.querySelector('#table')
let tableNumber = document.querySelector('#table-number')

function reloadBtn(){
    location.reload('index.html')
}



function genrateTable(){
    tableNumber.innerHTML = `${userInput.value}`
    for (let i = 1; i <= times.value; i++) {
        // console.log(`${userInput} x ${i} = ${times*i}`);
        div.innerHTML += `
        <h6 class="list">${userInput.value} x ${i} = ${times.value * i}</h6>
        <hr />
        `
    }
    userInput.value = ''
    times.value = ''
    if (times.value > 10) {
        userInput.value = ''
        times.value = ''
        div.innerHTML = ''
        alert('Your Table Number is Larger!')
    }
}





