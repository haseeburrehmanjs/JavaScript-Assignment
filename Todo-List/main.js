let list = document.querySelector('#list')
let input = document.querySelector('#input')

let addTodo = []

function renderScreen() {
    list.innerHTML = ''
    for (let i = 0; i < addTodo.length; i++) {
        list.innerHTML += `
        <li class="list-style d-flex justify-content-between mt-2">
            ${addTodo[i]}
           <div>
           <button onclick='deleteTodo(${i})'>Delete</button>
           <button onclick="editTodo()">Edit</button>
           </div>
        </li>
        `
    }
}

function submitData() {
    if (input.value === '') {
        alert('Enter Your list Items')
    } else {
        addTodo.push(input.value)
        input.value = ''
        renderScreen()
    }
}


function deleteTodo(index) {
    addTodo.splice(index , 1)
    renderScreen()
}

function editTodo(index){
    addTodo.splice(index, 1, prompt('Ubdate List'))
    renderScreen()
}